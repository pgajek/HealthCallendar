import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 90px;
  grid-template-rows: 40px 35px;
  grid-template-areas:
    'input1 input2'
    'button button';
  grid-gap: 10px;
  justify-items: center;
  width: 300px;
`;
const FirstInput = styled(Input)`
  grid-area: input1;
  width: 100%;
`;
const SecondInput = styled(Input)`
  width: 100%;
  grid-area: input2;
`;
const StyledButton = styled(Button)`
  grid-area: button;
`;

const AddNew = ({ change, name, name2, value, value2, click, placeholder }) => (
  <StyledWrapper>
    <FirstInput change={change} label={name} placeholder={placeholder} value={value} />
    <SecondInput change={change} label={name2} placeholder="kcal" value={value2} />
    <StyledButton color onClick={click}>
      Send
    </StyledButton>
  </StyledWrapper>
);

export default AddNew;
