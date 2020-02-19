import React from 'react';
import { storiesOf } from '@storybook/react';
import Count from './Count';

storiesOf('Molecules/Count', module).add('Primary', () => {
  return <Count />;
});
