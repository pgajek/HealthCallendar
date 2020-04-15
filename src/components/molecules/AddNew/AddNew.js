import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.form`
  display: grid;
  grid-template-columns: 150px 90px;
  grid-template-rows: 40px 35px;
  grid-template-areas:
    'input1 input2'
    'button button';
  grid-gap: 10px;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 250px 140px;
    grid-template-rows: 50px 50px;
    grid-gap: 20px;

    & > *::placeholder {
      font-size: ${theme.fontSize.m};
    }
  }
`;
const FirstInput = styled(Input)`
  grid-area: input1;
  width: 100%;
  height: 100%;
`;
const SecondInput = styled(Input)`
  width: 100%;
  height: 100%;
  grid-area: input2;
`;
const StyledButton = styled(Button)`
  grid-area: button;
`;

const AddNew = ({ change, name, name2, value, value2, click }) => (
  <StyledWrapper>
    <FirstInput onChange={change} name={name} placeholder={name} value={value} />
    <SecondInput onChange={change} name={name2} placeholder="kcal" value={value2} />
    <StyledButton color onClick={click}>
      Send
    </StyledButton>
  </StyledWrapper>
);

export default AddNew;
