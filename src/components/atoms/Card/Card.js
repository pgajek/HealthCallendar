import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 5px;
  padding: 5px;

  height: 75px;
  width: 170px;

  background-color: ${theme.mainGreen};
  border: 1px solid #b3b3b3;
  border-radius: 27px;

  box-shadow: 0px 3px 6px rgba(139, 139, 139, 0.41);

  font-size: ${theme.fontSize.s};
  font-family: 'Lato', sans-serif;

  &:hover > button,
  &:focus > button {
    opacity: 1;
  }

  @media (min-width: 1024px) {
    max-width: 330px;
    height: 150px;
    width: 100%;
    border-radius: 41px;
    font-size: ${theme.fontSize.l};
    padding: 10px;
  }
`;
const StyledName = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 50%;
  padding: 5px 0;

  color: #888888;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    padding: 15px 0;
  }
`;

const StyledValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50%;
  color: #fff;
  padding: 5px 0;

  @media (min-width: 1024px) {
    padding: 15px 0;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
  transition: opacity linear 0.2s;
  transform: translate(-50%, -50%);
  border: none;
  opacity: 0;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

const Card = ({ name, value, click, id }) => (
  <StyledWrapper>
    <StyledButton round onClick={(e) => click(e, id)}>
      X
    </StyledButton>
    <StyledName>{name}</StyledName>
    <StyledValue>{value} kcal</StyledValue>
  </StyledWrapper>
);

export default Card;
