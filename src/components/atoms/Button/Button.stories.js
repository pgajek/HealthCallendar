import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Primary', () => {
    return <Button>Login</Button>;
  })
  .add('Secondary', () => {
    return <Button color="#fff">Bioly</Button>;
  });
