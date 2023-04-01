import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LeftSidebarStyle } from '../styles/blocks';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as DashboardIcon } from '../img/icons/dashboard.svg';
import { ReactComponent as CardsIcon } from '../img/icons/cards.svg';
import { ReactComponent as ProductsIcon } from '../img/icons/products.svg';
import { ReactComponent as WearTearIcon } from '../img/icons/wear-tear.svg';
import { ReactComponent as GamesIcon } from '../img/icons/games.svg';
import { ReactComponent as SettingsIcon } from '../img/icons/settings.svg';
import {
  Dashboard,
  Cards,
  Products,
  WearTear,
  Games,
  Settings,
  MenuContainer,
  LogoContainer,
} from '../styles/LeftSidebar';

function LeftSidebar() {
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState('');

  useEffect(() => {
    setSelectedMenu(location.pathname);
  }, [location.pathname]);

  return (
    <LeftSidebarStyle>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        <Dashboard active={selectedMenu === '/' ? 'active' : undefined} to='/'>
          <DashboardIcon />
        </Dashboard>
        <Cards
          active={selectedMenu === '/cards' ? 'active' : undefined}
          to='/cards'
        >
          <CardsIcon />
        </Cards>
        <Products
          active={selectedMenu === '/products' ? 'active' : undefined}
          to='/products'
        >
          <ProductsIcon />
        </Products>
        <WearTear
          active={selectedMenu === '/wear-tear' ? 'active' : undefined}
          to='/wear-tear'
        >
          <WearTearIcon />
        </WearTear>
        <Games
          active={selectedMenu === '/games' ? 'active' : undefined}
          to='/games'
        >
          <GamesIcon />
        </Games>
        <Settings
          active={selectedMenu === '/settings' ? 'active' : undefined}
          to='/settings'
        >
          <SettingsIcon />
        </Settings>
      </MenuContainer>
    </LeftSidebarStyle>
  );
}

export default LeftSidebar;
