import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Count from './Count';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  background-color: #96e885;
`;

storiesOf('Molecules/Count', module)
  .add('Primary', () => {
    return <Count aspect="portionsDrink" howMany="8" />;
  })
  .add('smaller', () => (
    <StyledWrapper>
      <Count aspect="portionsDrink" howMany="12" />
      <Count aspect="portionsAlcohol" howMany="4" />
      <Count aspect="portionsSnack" howMany="4" />
    </StyledWrapper>
  ));
