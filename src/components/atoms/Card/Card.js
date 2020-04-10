import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
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
  @media (min-width: 1024px) {
    max-width: 330px;
    width: 50%;
    height: 150px;
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

const StyledButton = styled.button`
  position: absolute;
  top: 75%;
  right: 6%;
  opacity: 1;
  transition: opacity linear 0.2s;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 5%;
    height: 5%;
  }
`;

const Card = ({ name, value, click, id }) => (
  <StyledWrapper>
    {/* <StyledButton onClick={(e) => click(e, id)}>X</StyledButton> */}
    <StyledName>{name}</StyledName>
    <StyledValue>{value} kcal</StyledValue>
  </StyledWrapper>
);

export default Card;
