import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Atoms/Card', module).add('Primary', () => {
  return <Card name="jakis posiłek" value="353" />;
});
