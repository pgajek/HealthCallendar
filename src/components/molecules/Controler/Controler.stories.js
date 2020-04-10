import React from 'react';
import { storiesOf } from '@storybook/react';
import Controler from './Controler';

storiesOf('Molecules/Controler', module).add('Primary', () => {
  return <Controler label="Last body measurement" />;
});
