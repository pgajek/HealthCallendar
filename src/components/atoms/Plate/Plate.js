import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const StyledPlate = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px 0;

  font-size: ${theme.fontSize.s};
  color: #6b6b6b;
  -webkit-text-stroke: 0.5px #9b9b9b;

  & > * {
    display: flex;
    align-items: center;

    height: 100%;
    padding: 3px;
    border: none;
  }
  & > *:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: ${theme.fontSize.m};

    padding: 4px;
    box-shadow: 0 3 6px #000000;

    -webkit-text-stroke: 0.5px #9b9b9b;
  }
  @media (min-width: 1024px) {
    font-size: ${theme.fontSize.l};
  }
  @media (orientation: landscape) and (min-width: 600px) {
    font-size: ${theme.fontSize.m};
    height: 50px;
    padding: 2px;
    box-shadow: 0 3 6px #000000;
  }
`;
const StyledName = styled.span`
  background-color: ${theme.mainGreen};
  height: 30px;
  width: 140px;

  font-weight: 600;
  padding-left: 10px;

  @media (orientation: portrait) and (min-width: 768px) {
    width: 286px;
    height: 77px;
  }

  @media (min-width: 1024px) {
    width: 286px;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    width: 226px;
    height: 50px;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    width: 180px;
  }
`;
const StyledValue = styled.span`
  min-width: 60px;
  margin: 0 5px;
  height: 30px;
  font-size: ${theme.fontSize.xs};
  text-align: right;
  @media (orientation: portrait) and (min-width: 768px) {
    min-width: 128px;
    height: 77px;
    font-size: ${theme.fontSize.m};
  }
  @media (min-width: 1024px) {
    min-width: 128px;
    font-size: 1.6rem;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    min-width: 100px;
    height: 50px;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    min-width: 80px;
  }
`;

const Plate = ({ name, value }) => (
  <StyledPlate>
    <StyledName>{name}</StyledName>
    <StyledValue>{value}</StyledValue>
  </StyledPlate>
);

export default Plate;
