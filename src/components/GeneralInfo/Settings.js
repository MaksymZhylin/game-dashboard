import React from 'react';
import {
  Setting,
  SettingLeftIcon,
  SettingText,
  SettingRightIcon,
  SettingInfo,
  InfoComponents,
  InfoComponentsItem,
  CustomScrollbar,
  ToggleText,
  ToggleButton,
} from '../../styles/GeneralInfo';
import { ReactComponent as SettingsIcon } from '../../img/icons/general/settings.svg';
import { ReactComponent as ArrowIcon } from '../../img/icons/general/arrow-down.svg';
import { ReactComponent as ButtonOn } from '../../img/icons/general/entypo-switch-on.svg';
import { ReactComponent as ButtonOff } from '../../img/icons/general/entypo-switch-off.svg';

function Settings({
  isActive,
  handleSettingsClick,
  settingRef,
  buttonStates,
  handleToggleClick,
}) {
  return (
    <Setting isActive={isActive} onClick={handleSettingsClick} ref={settingRef}>
      <SettingLeftIcon>
        <SettingsIcon />
      </SettingLeftIcon>
      <SettingText>Table settings</SettingText>
      <SettingRightIcon isActive={isActive} onClick={handleSettingsClick}>
        <ArrowIcon />
        {isActive && (
          <SettingInfo>
            <InfoComponents>
              <CustomScrollbar>
                {buttonStates.map((buttonState) => (
                  <InfoComponentsItem key={buttonState.name}>
                    <ToggleText>{buttonState.name}</ToggleText>
                    <ToggleButton
                      active={buttonState.active}
                      onClick={() => handleToggleClick(buttonState.name)}
                    >
                      {buttonState.active ? <ButtonOn /> : <ButtonOff />}
                    </ToggleButton>
                  </InfoComponentsItem>
                ))}
              </CustomScrollbar>
            </InfoComponents>
          </SettingInfo>
        )}
      </SettingRightIcon>
    </Setting>
  );
}

export default Settings;
