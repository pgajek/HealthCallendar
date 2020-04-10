import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import styled from 'styled-components';

storiesOf('Atoms/Button', module)
  .add('Primary', () => {
    return <Button>Login</Button>;
  })
  .add('Secondary', () => {
    return <Button color>Send</Button>;
  })
  .add('Longer text', () => {
    return (
      <>
        <Button>Send the whole family</Button>
        <Button color>Send the whole family</Button>
      </>
    );
  })
  .add('Round', () => {
    return <Button round>+</Button>;
  });
