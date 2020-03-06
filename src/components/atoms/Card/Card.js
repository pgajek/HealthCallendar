import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
const StyledWrapper = styled.div`
  margin: 0 5px;
  position: relative;
  width: 50%;
  max-width: 200px;
  height: 50px;
  background-color: #dcdcdc;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const StyledName = styled.div`
  background-color: ${theme.mainGreen};
  width: 100%;
  min-height: 40%;
  padding: 2px 2px 2px 10px;
  color: #fff;
  text-shadow: 0px 1px 2px ${theme.shadowGreen};
  &:first-letter {
    text-transform: uppercase;
  }
`;
const StyledValue = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const Card = ({ name, value, click, id }) => (
  <StyledWrapper>
    <StyledButton onClick={e => click(e, id)}>X</StyledButton>
    <StyledName>{name}</StyledName>
    <StyledValue>{value} kcal</StyledValue>
  </StyledWrapper>
);

export default Card;
