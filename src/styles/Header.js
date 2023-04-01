import styled from 'styled-components';

const CommonSizeUserIcon = `
  width: 36px;
  height: 36px;
`;

const DashboardText = styled.div`
  font-size: 20px;
  line-height: 28px;
  text-transform: uppercase;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 1;
  font-weight: 500;
`;

const UserContainer = styled.div`
  ${CommonSizeUserIcon};
  rect {
    ${CommonSizeUserIcon};
    fill: #242731;
  }
  path {
    stroke: white;
    stroke-linecap: round;
  }
  circle {
    stroke: white;
    stroke-linecap: round;
  }
`;

const UsernameText = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  flex: none;
  order: 2;
  flex-grow: 0;
  font-weight: 500;
`;

export { DashboardText, UserContainer, UsernameText };
