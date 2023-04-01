import styled, { css } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const CommonSizeMenuIcon = `
  width: 48px;
  height: 48px;
`;

const Dashboard = styled(NavLink)`
  ${CommonSizeMenuIcon};

  path {
    fill: #191c23;
  }

  rect {
    stroke: #7d869e;
    stroke-linecap: round;
  }

  ${(props) =>
    props.active &&
    css`
      rect {
        stroke: #ffffff;
      }
      path {
        fill: #8941ff;
      }
    `}
`;

const Cards = styled(Link)`
  ${CommonSizeMenuIcon};

  path:first-of-type {
    fill: #191c23;
  }
  path:nth-of-type(2) {
    stroke: #7d869e;
    stroke-linejoin: round;
  }
  path:nth-of-type(3),
  path:nth-of-type(4) {
    fill-rule: evenodd;
    clip-rule: evenodd;
  }

  ${(props) =>
    props.active &&
    css`
    path:first-of-type {
      fill: #8941ff;
    }
    path:nth-of-type(2) {
      stroke: #ffffff;
      stroke-linejoin: round;
    }

    path:nth-of-type(3),
    path:nth-of-type(4) {
      fill-rule: evenodd;
      clip-rule: evenodd;
      fill: #ffffff;
    `}
`;

const Products = styled(Link)`
  ${CommonSizeMenuIcon};

  path:first-of-type {
    fill: #191c23;
  }
  path:nth-of-type(2) {
    stroke: #7d869e;
    fill: #191c23;
  }
  path:nth-of-type(3) {
    fill: #191c23;
    stroke: #7d869e;
    stroke-linecap: round;
  }
  path:nth-of-type(4) {
    fill: #7d869e;
  }

  ${(props) =>
    props.active &&
    css`
      path:first-of-type {
        fill: #8941ff;
      }
      path:nth-of-type(2) {
        fill: #8941ff;
        stroke: #ffffff;
      }
      path:nth-of-type(3) {
        fill: #8941ff;
        stroke: #ffffff;
        stroke-linecap: round;
      }
      path:nth-of-type(4) {
        fill: #ffffff;
      }
    `}
`;

const WearTear = styled(Link)`
  ${CommonSizeMenuIcon};

  path:first-of-type {
    fill: #191c23;
  }
  path:nth-of-type(2) {
    fill: #7d869e;
    fill-rule: evenodd;
    clip-rule: evenodd;
  }

  ${(props) =>
    props.active &&
    css`
      path:first-of-type {
        fill: #8941ff;
      }
      path:nth-of-type(2) {
        fill: #ffffff;
        fill-rule: evenodd;
        clip-rule: evenodd;
      }
    `}
`;

const Games = styled(Link)`
  ${CommonSizeMenuIcon};

  path:first-of-type {
    fill: #191c23;
  }
  rect:first-of-type {
    fill: #7d869e;
  }
  path:nth-of-type(2) {
    stroke: #7d869e;
    stroke-linecap: round;
  }
  path:nth-of-type(3) {
    stroke: #7d869e;
    stroke-linecap: round;
  }
  rect:nth-of-type(2) {
    fill: #7d869e;
  }
  path:nth-of-type(4) {
    stroke: #7d869e;
    stroke-linecap: round;
  }
  path:nth-of-type(5) {
    stroke: #7d869e;
  }

  ${(props) =>
    props.active &&
    css`
      path:first-of-type {
        fill: #8941ff;
      }
      rect:first-of-type {
        fill: #ffffff;
      }
      path:nth-of-type(2) {
        stroke: #ffffff;
        stroke-linecap: round;
      }
      path:nth-of-type(3) {
        stroke: #ffffff;
        stroke-linecap: round;
      }
      rect:nth-of-type(2) {
        fill: #ffffff;
      }
      path:nth-of-type(4) {
        stroke: #ffffff;
        stroke-linecap: round;
      }
      path:nth-of-type(5) {
        stroke: #ffffff;
      }
    `}
`;

const Settings = styled(Link)`
  ${CommonSizeMenuIcon};

  path:first-of-type {
    fill: #191c23;
  }
  path:nth-of-type(2),
  path:nth-of-type(3),
  path:nth-of-type(4),
  path:nth-of-type(5) {
    stroke: #7d869e;
    stroke-linecap: round;
  }
  circle:first-of-type,
  circle:nth-of-type(2) {
    stroke: #7d869e;
    stroke-linecap: round;
  }

  ${(props) =>
    props.active &&
    css`
      path:first-of-type {
        fill: #8941ff;
      }
      path:nth-of-type(2),
      path:nth-of-type(3),
      path:nth-of-type(4),
      path:nth-of-type(5) {
        stroke: #ffffff;
        stroke-linecap: round;
      }
      circle:first-of-type,
      circle:nth-of-type(2) {
        stroke: #ffffff;
        stroke-linecap: round;
      }
    `}
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const LogoContainer = styled.div`
  padding-top: 14px;
  top: 14px;
`;

export {
  Dashboard,
  Cards,
  Products,
  WearTear,
  Games,
  Settings,
  MenuContainer,
  LogoContainer,
};
