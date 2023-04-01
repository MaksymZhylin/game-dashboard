import React from 'react';
import { Container } from '../../styles/GameStats';
import LeftStats from './LeftStats/LeftStats';
import RightStats from './RightStats';

function GameStats() {
  return (
    <Container>
      <LeftStats />
      <RightStats />
    </Container>
  );
}

export default GameStats;
