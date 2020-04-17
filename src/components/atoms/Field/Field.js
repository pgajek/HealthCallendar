import React from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  height: 30px;

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
    height: 77px;
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

  width: 140px;

  font-weight: 600;
  padding-left: 10px;

  @media (orientation: portrait) and (min-width: 768px) {
    width: 286px;
  }

  @media (min-width: 1024px) {
    width: 286px;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    width: 226px;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    width: 180px;
  }
`;
const StyledInput = styled.input`
  width: ${({ unit }) => (unit ? '60px' : '120px')};
  margin: 0 5px;

  text-align: right;
  @media (orientation: portrait) and (min-width: 768px) {
    width: ${({ unit }) => (unit ? '128px' : '260px')};
    font-size: ${theme.fontSize.l};
    ::placeholder {
      font-size: ${theme.fontSize.l};
    }
  }
  @media (min-width: 1024px) {
    width: ${({ unit }) => (unit ? '128px' : '260px')};
    font-size: 1.6rem;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    width: ${({ unit }) => (unit ? '100px' : '200px')};
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    width: ${({ unit }) => (unit ? '80px' : '160px')};
  }
`;
const StyledUnit = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 30px;

  background-color: #fff;

  font-weight: 600;
  @media (orientation: portrait) and (min-width: 768px) {
    min-width: 90px;
  }
  @media (min-width: 1024px) {
    min-width: 90px;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    min-width: 70px;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    min-width: 50px;
  }
`;

const Field = ({ unit, change, name, label, value, type }) => (
  <>
    <StyledLabel htmlFor={label}>
      <StyledName>{label}</StyledName>
      <StyledInput
        unit={unit}
        type={type}
        placeholder="00"
        onChange={change}
        name={name}
        value={value}
      />
      {unit ? <StyledUnit>{unit}</StyledUnit> : null}
    </StyledLabel>
  </>
);

export default Field;
