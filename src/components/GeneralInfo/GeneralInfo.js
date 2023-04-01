import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  Container,
  Header,
  General,
  GeneralText,
  GeneralIcon,
} from '../../styles/GeneralInfo';
import { ReactComponent as InfoIcon } from '../../img/icons/general/info.svg';
import Table from './Table';
import { AppContext } from '../../AppContext';
import formatDate from './FormatData';
import Settings from './Settings';
import CardModel from './CardModel';
import Options from './Options';

function GeneralInfo() {
  const { info } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);

  const dataTable = [
    { name: 'Sorce', active: false },
    { name: 'Card model', active: true, content: <CardModel /> },
    { name: 'Card number', active: false, key: 'card_number' },
    { name: 'Card name', active: true, key: 'card_name' },
    { name: 'Type', active: true, key: 'type' },
    { name: 'Limited', active: true, key: 'limited' },
    { name: '№ Operations', active: true, key: 'operations' },
    { name: 'Date of lost operations', active: true, key: 'date' },
    { name: 'Rating', active: true, key: 'rating' },
    { name: 'Status', active: true, key: 'status' },
    { name: 'Price', active: true, key: 'price' },
    { name: 'Options', active: false, content: <Options /> },
  ].map((buttonState) => {
    let content = '';
    if (buttonState.content) {
      content = buttonState.content;
    } else if (info && info.general_sales_time[0][buttonState.key]) {
      content = info.general_sales_time[0][buttonState.key];
    }
    return { ...buttonState, content };
  });

  const [buttonStates, setButtonStates] = useState(dataTable);

  const settingRef = useRef(null);

  const handleSettingsClick = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleToggleClick = (name) => {
    setButtonStates((prevState) =>
      prevState.map((buttonState) =>
        buttonState.name === name
          ? { ...buttonState, active: !buttonState.active }
          : buttonState
      )
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingRef.current && !settingRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [settingRef]);

  useEffect(() => {
    if (info) {
      setButtonStates((prevState) =>
        prevState.map((buttonState) => {
          let content;
          let key;
          let value;
          switch (buttonState.name) {
            case 'Card model':
              content = <CardModel />;
              break;
            case '№ Operations':
              content = info.general_sales_time[0].operations;
              break;
            case 'Date of lost operations':
              content = formatDate(info.general_sales_time[0].date);
              break;
            case 'Rating':
              content = `${info.general_sales_time[0].rating}%`;
              break;
            case 'Options':
              content = <Options />;
              break;
            default:
              key = buttonState.name.toLowerCase().replace(/ /g, '_');
              value = info.general_sales_time[0][key];
              content = value !== undefined ? value : '';
              break;
          }
          return { ...buttonState, content };
        })
      );
    }
  }, [info]);

  return (
    <Container>
      <Header>
        <General>
          <GeneralText>General Sales / Time</GeneralText>
          <GeneralIcon>
            <InfoIcon />
          </GeneralIcon>
        </General>
        <Settings
          isActive={isActive}
          handleSettingsClick={handleSettingsClick}
          settingRef={settingRef}
          buttonStates={buttonStates}
          handleToggleClick={handleToggleClick}
        />
      </Header>
      <Table data={buttonStates} />
    </Container>
  );
}

export default GeneralInfo;
