import React, { useState, useEffect, useRef } from 'react';
import {
  CircleDiagramContainer,
  RightStatsContainer,
  RightStatsLoadingContainer,
  HeaderStats,
  HeaderName,
  Settings,
  SettingText,
  SettingInfo,
  InfoComponents,
  SettingsLocationButton,
  SettingsLocationButtonText,
  SettingsLocationButtonIcon,
  RightInfoComponentsItem,
  RightInfoButton,
  RightInfoText,
  RightContentContainer,
  LocationInfoContainer,
  PieLocationInfo,
  PieLocationInfoItem,
  PointContainer,
  ItemText,
} from '../../styles/GameStats';
import CircleDiagram from './CircleDiagram/CircleDiagram';
import { ReactComponent as ArrowIcon } from '../../img/icons/general/arrow-down.svg';
import { ReactComponent as LocationActive } from '../../img/icons/stats/settings/location/drop-down.svg';
import { ReactComponent as Point } from '../../img/icons/stats/point.svg';
import { dataPie, dataLocation } from './data';

function RightStats() {
  const [locationIsActive, setLocationIsActive] = useState(false);
  const [locationButtonStates, setLocationButtonStates] =
    useState(dataLocation);
  const [activeLocationButtonStateName, setActiveLocationButtonStateName] =
    useState('Naperville');
  const rightSettingRef = useRef(null);

  const handleRightSettingsClick = () => {
    setLocationIsActive((prevState) => !prevState);
  };

  const handleToggleClick = (name) => {
    setLocationButtonStates((prevState) =>
      prevState.map((buttonState) => {
        if (buttonState.name === name) {
          setActiveLocationButtonStateName(name);
          return { ...buttonState, active: true };
        }
        return { ...buttonState, active: false };
      })
    );
  };

  useEffect(() => {
    const activeButtonState = locationButtonStates.find(
      (buttonState) => buttonState.active
    );
    setActiveLocationButtonStateName(activeButtonState.name);

    const handleRightSettingsClickOutside = (event) => {
      if (
        rightSettingRef.current &&
        !rightSettingRef.current.contains(event.target)
      ) {
        setLocationIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleRightSettingsClickOutside);
    return () => {
      document.removeEventListener(
        'mousedown',
        handleRightSettingsClickOutside
      );
    };
  }, [rightSettingRef, locationButtonStates]);

  return dataPie ? (
    <RightStatsContainer>
      <HeaderStats>
        <HeaderName>Game Stats</HeaderName>
        <Settings>
          <SettingText>Location</SettingText>
          <SettingsLocationButton
            isActive={locationIsActive}
            onClick={handleRightSettingsClick}
            ref={rightSettingRef}
          >
            <SettingsLocationButtonText>
              {activeLocationButtonStateName}
            </SettingsLocationButtonText>
            <SettingsLocationButtonIcon
              isActive={locationIsActive}
              onClick={handleRightSettingsClick}
            >
              <ArrowIcon />
              {locationIsActive && (
                <SettingInfo width='237px' right='220px'>
                  <InfoComponents>
                    {locationButtonStates.map((buttonState) => (
                      <RightInfoComponentsItem
                        key={buttonState.name}
                        active={buttonState.active}
                        onClick={() => handleToggleClick(buttonState.name)}
                      >
                        <RightInfoText active={buttonState.active}>
                          {buttonState.name}
                        </RightInfoText>
                        <RightInfoButton>
                          {buttonState.active && <LocationActive />}
                        </RightInfoButton>
                      </RightInfoComponentsItem>
                    ))}
                  </InfoComponents>
                </SettingInfo>
              )}
            </SettingsLocationButtonIcon>
          </SettingsLocationButton>
        </Settings>
      </HeaderStats>

      <RightContentContainer>
        <CircleDiagramContainer>
          <CircleDiagram dataPie={dataPie} />
        </CircleDiagramContainer>
        <LocationInfoContainer>
          {dataPie.map((item) => (
            <PieLocationInfo key={item.name}>
              <PieLocationInfoItem>
                <PointContainer color={item.color}>
                  <Point />
                </PointContainer>
                <ItemText>{item.name}</ItemText>
              </PieLocationInfoItem>
            </PieLocationInfo>
          ))}
        </LocationInfoContainer>
      </RightContentContainer>
    </RightStatsContainer>
  ) : (
    <RightStatsLoadingContainer>Loadig...</RightStatsLoadingContainer>
  );
}

export default RightStats;
