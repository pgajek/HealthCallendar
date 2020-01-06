import React from 'react';
import { storiesOf } from '@storybook/react';
import AddNew from './AddNew';

storiesOf('AddNew', module).add('Primary', () => {
  return <AddNew unit="unit" label="label" />;
});
