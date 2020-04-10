import React from 'react';
import Field from './Field';
import { storiesOf } from '@storybook/react';

storiesOf('Atoms/Field', module)
  .add('primary', () => <Field label="Waga" unit="kg" />)
  .add('secondary', () => (
    <>
      <Field label="Femoral size" unit="cm" />
      <Field label="Obwód klatki" unit="kg" />
    </>
  ));
