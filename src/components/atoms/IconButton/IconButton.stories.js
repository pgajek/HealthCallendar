import React from 'react';
import IconButton from './IconButton';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { ReactComponent as WrongIcon } from 'assets/icons/wrongicon.svg';

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #69b749;
`;

storiesOf('Atoms/IconButton', module)
  .addDecorator((story) => <Bg>{story()}</Bg>)
  .add('logout', () => (
    <IconButton>
      <WrongIcon />
    </IconButton>
  ))
  .add('secondary', () => (
    <IconButton secondary>
      <YesIcon />
    </IconButton>
  ))
  .add('green', () => (
    <IconButton dark>
      <Logout />
    </IconButton>
  ));
