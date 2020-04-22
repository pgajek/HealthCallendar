import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.form`
  display: grid;
  grid-template-columns: 150px 10px 90px;
  grid-template-rows: 40px 15px 35px;
  grid-template-areas:
    'input1 . input2'
    '. . .'
    'error error error'
    'button button button';

  justify-items: center;

  ${({ meal }) =>
    meal &&
    css`
      grid-template-columns: 150px 10px 90px;
      grid-template-rows: 40px 10px 40px 15px 35px;
      grid-template-areas:
        'input1 . input2'
        '. . .'
        'input3 input3 input3'
        'error error error'
        'button button button';
    `}

  @media (min-width: 768px) {
    grid-template-columns: 250px 20px 140px;
    grid-template-rows: 50px 10px 50px 50px;

    & > *::placeholder {
      font-size: ${theme.fontSize.m};
    }
    ${({ meal }) =>
      meal &&
      css`
        grid-template-rows: 50px 20px 50px 15px 50px;
      `}
  }
`;
const StyledLabel = styled.label`
  width: 0;
  height: 0;
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
const StyledSelect = styled.select`
  grid-area: input3;
  width: 100%;
  height: 100%;
`;
const StyledError = styled.div`
  font-size: ${theme.fontSize.xxs};
  color: red;
  grid-area: error;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const AddNew = ({ change, name, name2, value, value2, click, meal, mealValue, error }) => (
  <StyledWrapper meal={meal}>
    <StyledLabel htmlFor={name} />
    <FirstInput
      onChange={change}
      name={name}
      id={name}
      placeholder={name}
      value={value}
      required
      type="text"
    />
    <StyledLabel htmlFor={name2} />
    <SecondInput
      onChange={change}
      name={name2}
      id={name2}
      placeholder="kcal"
      value={value2}
      required
      pattern="[0-9]*"
      type="tel"
    />
    {meal && (
      <StyledSelect onChange={change} value={mealValue} name={meal} required>
        <option value="">Chose a type</option>
        <option value="breakfast">Breakfast</option>
        <option value="secondBreakfast">SecondBreakfast</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="dinner">Dinner</option>
      </StyledSelect>
    )}
    {error && <StyledError> All values must be set.</StyledError>}
    <StyledButton color onClick={click} type="submit">
      Send
    </StyledButton>
  </StyledWrapper>
);

export default AddNew;
