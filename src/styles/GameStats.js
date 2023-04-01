import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const LeftStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #242731;
  border-radius: 4px;
  order: 0;
  flex-grow: 1;
`;

const HeaderStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 32px 16px;
  gap: 48px;
`;

const HeaderName = styled.div`
  flex: none;
  order: 0;
  flex-grow: 1;
  color: #ffffff;
  font-weight: 500;
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  gap: 16px;
`;

const SettingText = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SettingsRadioButton = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;
  flex: none;
  order: 1;
  flex-grow: 0;
  color: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
  stroke: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
`;

const SettingsRadioButtonText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SettingsRadioButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  transform: ${({ isActive }) => !isActive && 'matrix(1, 0, 0, -1, 0, 0)'};

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 21px;
  padding-bottom: 21px;

  height: 248px;
`;

const DiagramContainer = styled.div`
  flex: none;
  order: 0;
  flex-grow: 1;
`;

const InfoContainer = styled.div`
  flex: none;
  order: 1;
  flex-grow: 1;
`;

const RightStatsContainer = styled.div`
  flex: none;
  order: 1;
  flex-grow: 1;
  background: #242731;
  border-radius: 4px;
`;

const RightStatsLoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  flex-grow: 1;
  background: #242731;
  border-radius: 4px;
  width: 400px;
  height: 100%;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.6);
`;

const SettingsLocationButton = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;
  flex: none;
  order: 1;
  flex-grow: 0;
  color: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
  stroke: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
`;

const SettingsLocationButtonText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SettingsLocationButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
  transform: ${({ isActive }) => !isActive && 'matrix(1, 0, 0, -1, 0, 0)'};

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const RightContentContainer = styled.div`
  position: relative;
  display: flex;
  padding: 32px;
`;

const CircleDiagramContainer = styled.div`
  flex: none;
  order: 0;
  flex-grow: 1;
`;

const LocationInfoContainer = styled.div`
  flex: none;
  order: 1;
  flex-grow: 1;
  padding: 16px;
`;

const SettingInfo = styled.div`
  z-index: 3;
  position: relative;
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  max-height: 288px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  background: #242731;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.4), 0px 2px 4px rgba(0, 0, 0, 0.25),
    0px 8px 48px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(36, 38, 53, 0.08),
    0px 4px 12px rgba(36, 38, 53, 0.1), 0px 16px 24px rgba(55, 58, 83, 0.16);
  border-radius: 8px;
`;

const InfoComponents = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  min-width: 160px;
  flex-direction: column;
  padding: 0px;
  flex: none;
  order: 0;
  flex-grow: 1;
  padding: 4px;
`;

const LeftInfoComponentsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 24px;
  color: #ffffff;
  gap: 16px;
`;

const RightInfoComponentsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 24px;
  gap: 10px;
  border-radius: 4px;
  :hover {
    background: #31343d;
  }
  ${(props) =>
    props.active &&
    css`
      background: #31343d;
    `}
`;

const RightInfoButton = styled.div`
  display: flex;
  align-items: center;
  order: 1;
  flex-grow: 0;
  width: 15px;
  height: 12px;
`;

const RightInfoText = styled.div`
  color: #a2a4a8;
  flex: none;
  order: 0;
  flex-grow: 1;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  ${(props) =>
    props.active &&
    css`
      background: #31343d;
      color: #ffffff;
    `}
`;

const RadioButton = styled.div`
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 24px;
  height: 24px;

  stroke: none;
  path {
    fill: #60677a;
  }
  ${(props) =>
    props.active &&
    css`
      stroke: none;
      path {
        fill: #8941ff;
      }
      circle {
        fill: #8941ff;
      }
    `}
`;

const RadioText = styled.div`
  color: #ffffff;
  flex: none;
  order: 1;
  flex-grow: 1;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const PieLocationInfo = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0px;
  order: 0;
  flex-grow: 1;
`;

const PieLocationInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px 8px 24px;
  color: #ffffff;
  gap: 16px;
`;

const PointContainer = styled.div`
  display: flex;
  align-items: center;
  order: 0;
  flex-grow: 0;
  width: 8px;
  height: 8px;
  circle {
    fill: ${(props) => props.color};
  }
`;

const ItemText = styled.div`
  flex: none;
  order: 1;
  flex-grow: 1;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #9f9f9f;
`;

const DiagramInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
`;

const RatingList = styled.ul`
  order: 0;
  flex-grow: 0;
  gap: 16px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const RatingListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
`;

const RatingListButtonOn = styled.div`
  width: 24px;
  height: 24px;
  order: 0;
  flex-grow: 0;

  rect:first-of-type {
    stroke: ${(props) => props.color};
  }
  rect:nth-of-type(2) {
    fill: ${(props) => props.color};
  }
`;

const RatingListButtonOff = styled.div`
  width: 24px;
  height: 24px;
  order: 0;
  flex-grow: 0;

  rect:first-of-type {
    stroke: ${(props) => props.color};
  }
`;

const RatingListText = styled.div`
  order: 1;
  flex-grow: 0;
  width: 96px;
`;

const RatingListMainText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

const RatingListSubText = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const UsersList = styled.ul`
  display: flex;
  flex-direction: column;
  order: 1;
  flex-grow: 0;
  gap: 16px;
  list-style: none;
  padding: 0;
`;

const UsersListItem = styled.li`
  width: 96px;
`;

const UsersListText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
`;

const UsersListSubtext = styled.div`
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

export {
  Container,
  LeftStatsContainer,
  CircleDiagramContainer,
  RightStatsContainer,
  RightStatsLoadingContainer,
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
};
