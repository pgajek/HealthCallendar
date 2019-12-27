import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  font-size: 1.4rem;
  height: 30px;
  & > * {
    padding: 3px;
    box-shadow: 0 1.5px 6px #000000;
    height: 100%;
    display: block;
    border: 1px;
    display: flex;
    align-items: center;
  }
  & > *:focus {
    outline: none;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
    height: 45px;
    padding: 4px;
    box-shadow: 0 3 6px #000000;
    border: 2px;
  }
  @media (min-width: 1644px) {
    font-size: 2rem;
    height: 60px;
    padding: 6px;
    border: 2px;
  }
`;
const StyledName = styled.span`
  background-color: #81dc5c;
  border-color: #81dc5c;
  color: white;
  width: 140px;
  text-shadow: 0 1.5px 6px #1a9b30;
  font-weight: 600;
  padding-left: 10px;

  @media (min-width: 1024px) {
    text-shadow: 0 3px 6px #1a9b30;
    width: 210px;
  }
  @media (min-width: 1644px) {
    width: 280px;
  }
`;
const StyledInput = styled.input`
  width: 60px;
  border-color: #fff;
  border-radius: 0 2px 2px 0;
  margin: 0 5px;
  text-align: right;
  @media (min-width: 1024px) {
    width: 90px;
    font-size: 1.6rem;
  }
  @media (min-width: 1644px) {
    width: 120px;
    font-size: 2rem;
  }
`;
const StyledUnit = styled.span`
  width: 30px;
  background-color: #fff;
  border-color: #fff;
  border-radius: 0 2px 2px 0;
  font-weight: 600;
  @media (min-width: 1024px) {
    width: 45px;
  }
  @media (min-width: 1644px) {
    width: 60px;
  }
`;

const Field = ({ label, unit, change }) => (
  <>
    <StyledLabel>
      <StyledName>{label}</StyledName>
      <StyledInput placeholder="00" onChange={change} />
      <StyledUnit>{unit}</StyledUnit>
    </StyledLabel>
  </>
);

export default Field;
