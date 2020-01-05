import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { ReactComponent as Glass } from 'assets/icons/glass.svg';
import styled from 'styled-components';

const StyledGlass = styled(Glass)`
  .st5,
  .st6 {
    fill: transparent;
    transition: 0.5s;
  }
  &:hover .st5,
  &:hover .st6 {
    fill: lightblue;
  }
`;

storiesOf('Atoms/Button', module)
  .add('Primary', () => {
    return <Button>Login</Button>;
  })
  .add('Secondary', () => {
    return (
      <Button color="#fff">
        <StyledGlass />
      </Button>
    );
  });
