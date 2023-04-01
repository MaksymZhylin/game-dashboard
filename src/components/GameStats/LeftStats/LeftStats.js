import React, { useState, useEffect, useRef, useContext } from 'react';
import {
  LeftStatsContainer,
  HeaderStats,
  HeaderName,
  Settings,
  SettingText,
  SettingsRadioButton,
  SettingsRadioButtonText,
  SettingsRadioButtonIcon,
  LeftContentContainer,
  DiagramContainer,
  InfoContainer,
  SettingInfo,
  InfoComponents,
  LeftInfoComponentsItem,
  RadioText,
  RadioButton,
  DiagramInfo,
  RatingList,
  RatingListItem,
  RatingListButtonOn,
  RatingListButtonOff,
  RatingListText,
  RatingListMainText,
  RatingListSubText,
  UsersList,
  UsersListItem,
  UsersListText,
  UsersListSubtext,
} from '../../../styles/GameStats';
import { ReactComponent as RadioButtonOn } from '../../../img/icons/stats/settings/data-type/radio-on.svg';
import { ReactComponent as RadioButtonoff } from '../../../img/icons/stats/settings/data-type/radio-off.svg';
import { ReactComponent as ArrowIcon } from '../../../img/icons/general/arrow-down.svg';
import { ReactComponent as SelectButtonOn } from '../../../img/icons/stats/rating/select-on.svg';
import { ReactComponent as SelectButtonOff } from '../../../img/icons/stats/rating/select-off.svg';
import Charts from '../Charts/Charts';
import { dataType, dataRating } from '../data';
import { AppContext } from '../../../AppContext';

function LeftStats() {
  const [radioButtonIsActive, setRadioButtonIsActive] = useState(false);
  const [radioButtonStates, setRadioButtonStates] = useState(dataType);
  const [ratingButtonStates, setRatingButtonStates] = useState(dataRating);
  const [activeRadioButtonStateName, setActiveRadioButtonStateName] =
    useState('Graph');
  const leftSettingRef = useRef(null);
  const { info } = useContext(AppContext);

  const dataUsers = [
    {
      name: info ? info.users[0].name : '',
      date: info ? info.users[0].date : '',
    },
    {
      name: info ? info.users[1].name : '',
      date: info ? info.users[1].date : '',
    },
    {
      name: info ? info.users[2].name : '',
      date: info ? info.users[2].date : '',
    },
    {
      name: info ? info.users[3].name : '',
      date: info ? info.users[3].date : '',
    },
    {
      name: info ? info.users[4].name : '',
      date: info ? info.users[4].date : '',
    },
  ];

  const handleLeftSettingsClick = () => {
    setRadioButtonIsActive((prevState) => !prevState);
  };

  const handleRatingButtonClick = (index) => {
    setRatingButtonStates((prevState) =>
      prevState.map((buttonState, i) => {
        if (i === index) {
          return { ...buttonState, active: !buttonState.active };
        }
        return buttonState;
      })
    );
  };

  const handleToggleClick = (name) => {
    setRadioButtonStates((prevState) =>
      prevState.map((buttonState) => {
        if (buttonState.name === name) {
          setActiveRadioButtonStateName(name);
          return { ...buttonState, active: true };
        }
        return { ...buttonState, active: false };
      })
    );
  };

  useEffect(() => {
    const activeButtonState = radioButtonStates.find(
      (buttonState) => buttonState.active
    );
    setActiveRadioButtonStateName(activeButtonState.name);

    const handleLeftSettingsOutside = (event) => {
      if (
        leftSettingRef.current &&
        !leftSettingRef.current.contains(event.target)
      ) {
        setRadioButtonIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleLeftSettingsOutside);
    return () => {
      document.removeEventListener('mousedown', handleLeftSettingsOutside);
    };
  }, [leftSettingRef, radioButtonStates]);

  return (
    <LeftStatsContainer>
      <HeaderStats>
        <HeaderName>Game Stats</HeaderName>
        <Settings>
          <SettingText>Data type</SettingText>
          <SettingsRadioButton
            isActive={radioButtonIsActive}
            onClick={handleLeftSettingsClick}
            ref={leftSettingRef}
          >
            <SettingsRadioButtonText>
              {activeRadioButtonStateName}
            </SettingsRadioButtonText>
            <SettingsRadioButtonIcon
              isActive={radioButtonIsActive}
              onClick={handleLeftSettingsClick}
            >
              <ArrowIcon />
              {radioButtonIsActive && (
                <SettingInfo width='300px' right='282px'>
                  <InfoComponents>
                    {radioButtonStates.map((buttonState) => (
                      <LeftInfoComponentsItem key={buttonState.name}>
                        <RadioButton
                          active={buttonState.active}
                          onClick={() => handleToggleClick(buttonState.name)}
                        >
                          {buttonState.active ? (
                            <RadioButtonOn />
                          ) : (
                            <RadioButtonoff />
                          )}
                        </RadioButton>
                        <RadioText>{buttonState.name}</RadioText>
                      </LeftInfoComponentsItem>
                    ))}
                  </InfoComponents>
                </SettingInfo>
              )}
            </SettingsRadioButtonIcon>
          </SettingsRadioButton>
        </Settings>
      </HeaderStats>
      <LeftContentContainer>
        <DiagramContainer>
          <Charts ratingButtonStates={ratingButtonStates} />
        </DiagramContainer>
        <InfoContainer>
          <DiagramInfo>
            <RatingList>
              {ratingButtonStates.map((buttonState, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <RatingListItem key={`buttonState-${index}`}>
                  {buttonState.active ? (
                    <RatingListButtonOn
                      color={buttonState.color}
                      onClick={() => handleRatingButtonClick(index)}
                    >
                      <SelectButtonOn />
                    </RatingListButtonOn>
                  ) : (
                    <RatingListButtonOff
                      color={buttonState.color}
                      onClick={() => handleRatingButtonClick(index)}
                    >
                      <SelectButtonOff />
                    </RatingListButtonOff>
                  )}
                  <RatingListText>
                    <RatingListMainText>{buttonState.text}</RatingListMainText>
                    <RatingListSubText>{buttonState.subtext}</RatingListSubText>
                  </RatingListText>
                </RatingListItem>
              ))}
            </RatingList>

            <UsersList>
              {dataUsers.map((user, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <UsersListItem key={`user-${index}`}>
                  <UsersListText>{user.name}</UsersListText>
                  <UsersListSubtext>{user.date}</UsersListSubtext>
                </UsersListItem>
              ))}
            </UsersList>
          </DiagramInfo>
        </InfoContainer>
      </LeftContentContainer>
    </LeftStatsContainer>
  );
}

export default LeftStats;
