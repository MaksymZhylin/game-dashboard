import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderStyle } from '../styles/blocks';
import { ReactComponent as UserIcon } from '../img/icons/user.svg';
import { DashboardText, UserContainer, UsernameText } from '../styles/Header';

function Header({ username }) {
  const location = useLocation();
  const [headerText, setHeaderText] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setHeaderText('Dashboard');
        break;
      case '/cards':
        setHeaderText('Cards');
        break;
      case '/products':
        setHeaderText('Products');
        break;
      case '/wear-tear':
        setHeaderText('Wear Tear');
        break;
      case '/games':
        setHeaderText('Games');
        break;
      case '/settings':
        setHeaderText('Settings');
        break;
      default:
        setHeaderText('Not Found');
        break;
    }
  }, [location.pathname]);

  return (
    <HeaderStyle>
      <DashboardText>{headerText}</DashboardText>
      <UserContainer>
        <UserIcon />
      </UserContainer>
      <UsernameText>{username}</UsernameText>
    </HeaderStyle>
  );
}

export default Header;
