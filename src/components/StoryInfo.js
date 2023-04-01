import React, { useContext } from 'react';
import { ReactComponent as UserIcon } from '../img/icons/info/user.svg';
import { ReactComponent as SettingIcon } from '../img/icons/info/setting.svg';
import { ReactComponent as KeyholeIcon } from '../img/icons/info/keyhole.svg';
import { ReactComponent as ShareIcon } from '../img/icons/info/share.svg';
import { ReactComponent as GamesIcon } from '../img/icons/info/games.svg';
import {
  Container,
  Info,
  Icon,
  Text,
  Number,
  Subtext,
} from '../styles/StoryInfo';
import { AppContext } from '../AppContext';

function StoryInfo() {
  const { info } = useContext(AppContext);

  const data = [
    {
      order: '0',
      component: UserIcon,
      background: 'rgba(66, 204, 88, 0.15)',
      number: info ? info.statistic.iam_users : '',
      subtext: 'IAM Users',
    },
    {
      order: '1',
      component: SettingIcon,
      background: 'rgba(73, 152, 238, 0.15)',
      number: info ? info.statistic.iam_roles : '',
      subtext: 'IAM Rooles',
    },
    {
      order: '2',
      component: KeyholeIcon,
      background: 'rgba(242, 93, 93, 0.15)',
      number: info ? info.statistic.iam_policies : '',
      subtext: 'IAM Policies',
    },
    {
      order: '3',
      component: ShareIcon,
      background: 'rgba(244, 167, 50, 0.15)',
      number: info ? info.statistic.compute_resources : '',
      subtext: 'Compute Resources',
    },
    {
      order: '4',
      component: GamesIcon,
      background: 'rgba(155, 83, 248, 0.15)',
      number: info ? info.statistic.games : '',
      subtext: 'Games',
    },
  ];

  return (
    <Container>
      {info &&
        data.map(
          ({
            order,
            component: IconComponent,
            background,
            number,
            subtext,
          }) => (
            <Info order={order} key={order}>
              <Icon background={background}>
                <IconComponent />
              </Icon>
              <Text>
                <Number>{number}</Number>
                <Subtext>{subtext}</Subtext>
              </Text>
            </Info>
          )
        )}
    </Container>
  );
}

export default StoryInfo;
