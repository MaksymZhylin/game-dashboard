import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 32px 24px 32px;
  background: #242731;
  border-radius: 4px;
  gap: 32px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const General = styled.div`
  display: flex;
  order: 0;
  flex-grow: 1;
  gap: 12px;
  }
`;

const GeneralText = styled.div`
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  font-weight: 500;
`;

const GeneralIcon = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 24px;
  height: 24px;

  path:first-of-type,
  path:nth-of-type(2),
  path:nth-of-type(3) {
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const Setting = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
  stroke: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
  fill: ${({ isActive }) => (isActive ? '#76b2ea' : '#ffffff')};
  flex: none;
  order: 1;
  flex-grow: 0;
  gap: 8px;
  font-weight: 500;
`;

const SettingLeftIcon = styled.div`
  width: 24px;
  height: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  path:last-child {
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  rect {
    width: 24px;
    height: 24px;
  }
`;
const SettingText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const SettingRightIcon = styled.div`
  width: 20px;
  height: 20px;
  flex: none;
  order: 2;
  flex-grow: 0;
  transform: ${({ isActive }) => !isActive && 'matrix(1, 0, 0, -1, 0, 0)'};

  path {
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

const SettingInfo = styled.div`
  position: relative;
  right: 282px;
  width: 300px;
  max-height: 220px;
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

const CustomScrollbar = styled.div`
  width: max;
  max-height: 200px;
  overflow-y: scroll;
  z-index: 3;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #60677a;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    background: #a9a6ae;
    border-radius: 4px;
  }
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

const InfoComponentsItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px 6px 24px;
  color: #ffffff;
`;

const ToggleText = styled.div`
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 1;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

const ToggleButton = styled.div`
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 28px;
  height: 28px;

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
    `}
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const CardImg = styled.div`
  width: 28px;
  height: 40px;
  background: ${(url) => (url ? url.image : '#ffffff')};
  order: 0;
  flex-grow: 0;
`;

const CardText = styled.div`
  width: 50%;
  text-align: left;
  font-size: 13px;
  line-height: 20px;
  color: #ffffff;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  font-weight: 400;
`;

const OptionContainer = styled.div`
  width: 24px;
  height: 24px;
  circle {
    fill: #b1b1b1;
  }
`;

export {
  Container,
  Header,
  General,
  GeneralText,
  GeneralIcon,
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
  CardContainer,
  CardImg,
  CardText,
  OptionContainer,
};
