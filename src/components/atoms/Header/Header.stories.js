import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

storiesOf('Atoms/Header', module)
  .add('Normal', () => <Header>Jestem normalny</Header>)
  .add('big', () => <Header big>Jestem duzy</Header>);
