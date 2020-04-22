import React from 'react';
import { storiesOf } from '@storybook/react';
import AddNew from './AddNew';

storiesOf('Molecules/AddNew', module)
  .add('Primary', () => {
    return <AddNew unit="unit" label="label" />;
  })
  .add('Meal', () => {
    return <AddNew unit="unit" label="label" meal mealValue />;
  });
