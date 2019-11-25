import React from 'react';
import Field from './Field';
import { storiesOf } from '@storybook/react';

storiesOf('Field', module)
  .add('primary', () => <Field name="Waga" unit="kg" />)
  .add('secondary', () => (
    <>
      <Field name="Obwód łydki" unit="cm" />
      <Field name="Obwód klatki" unit="cm" />
    </>
  ));
