import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import Field from 'components/atoms/Field/Field';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${theme.mainGreen};
`;

const AddNew = ({ change, name, name2, click, value, value2 }) => (
  <StyledWrapper>
    <Field change={change} label={name} name={name} placeholder="Posiłek" value={value} />
    <Field change={change} unit="kcal" label={name2} name={name2} value={value2} />
    <IconButton green onClick={click}>
      <YesIcon />
    </IconButton>
  </StyledWrapper>
);

export default AddNew;
