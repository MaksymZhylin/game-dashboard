import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { CardContainer, CardImg, CardText } from '../../styles/GeneralInfo';

export default function CardModel() {
  const { info } = useContext(AppContext);

  return (
    <CardContainer>
      <CardImg url={info ? info.general_sales_time[0].model.image : null} />
      <CardText>{info ? info.general_sales_time[0].model.name : ''}</CardText>
    </CardContainer>
  );
}
