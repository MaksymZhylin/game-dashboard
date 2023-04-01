import React from 'react';
import {
  Container,
  Body,
  BodyTR,
  STD,
  STH,
  Head,
  HeadTR,
} from '../../styles/Table';

function Table({ data }) {
  const activeData = data.filter((item) => item.active);

  return (
    <Container>
      <Head>
        <HeadTR>
          {activeData.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <STH key={index}>{item.name}</STH>
          ))}
        </HeadTR>
      </Head>
      <Body>
        <BodyTR>
          {activeData.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <STD key={index}>{item.content}</STD>
          ))}
        </BodyTR>
      </Body>
    </Container>
  );
}

export default Table;
