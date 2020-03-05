import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import Field from 'components/atoms/Field/Field';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 12%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${theme.mainGreen};
  @media (min-width: 1024px) {
    bottom: 0;
  }
`;

const AddNew = ({ change, name, name2, value, value2 }) => (
  <StyledWrapper>
    <Field change={change} label={name} name={name} placeholder="Meal" value={value} />
    <Field change={change} unit="kcal" label={name2} name={name2} value={value2} />
  </StyledWrapper>
);

export default AddNew;
