import React from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import Field from 'components/atoms/Field/Field';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div``;

const StyledIconButton = styled(IconButton)`
  background-color: ${theme.mainGreen};
`;

const AddNew = ({ label, unit, change }) => (
  <StyledWrapper>
    <Field change={change} unit={unit} label={label} />
    <StyledIconButton yes />
  </StyledWrapper>
);

export default AddNew;
