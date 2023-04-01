import React from 'react';
import Flex from '../styles/Flex';
import StoryInfo from '../components/StoryInfo';
import GameStats from '../components/GameStats/GameStats';
import GeneralInfo from '../components/GeneralInfo/GeneralInfo';

function Dashboard() {
  return (
    <Flex
      flexGrow={1}
      overflow='hidden'
      position='relative'
      gap='16px'
      marginLeft='32px'
      marginRight='48px'
      flexDirection='column'
    >
      <StoryInfo />
      <GameStats />
      <GeneralInfo />
    </Flex>
  );
}

export default Dashboard;
