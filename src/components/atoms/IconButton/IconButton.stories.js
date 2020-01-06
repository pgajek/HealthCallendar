import React from 'react';
import IconButton from './IconButton';
import { storiesOf, addDecorator } from '@storybook/react';
import styled from 'styled-components';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';

const Bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #69b749;
`;

storiesOf('Atoms/IconButton', module)
  .addDecorator(story => <Bg>{story()}</Bg>)
  .add('logout', () => (
    <IconButton logout>
      <Logout />{' '}
    </IconButton>
  ))
  .add('secondary', () => (
    <IconButton secondary>
      <Logout />{' '}
    </IconButton>
  ))
  .add('green', () => (
    <IconButton green>
      <Logout />{' '}
    </IconButton>
  ));
