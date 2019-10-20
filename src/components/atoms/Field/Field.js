import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: row;

  & > * {
    padding: 3px;
    box-shadow: 0 1.5px 6px #000000;
    height: 30px;
    display: block;
    border: 1px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  & > *:focus {
    outline: none;
  }
`;
const StyledName = styled.span`
  background-color: #81dc5c;
  border-color: #81dc5c;
  color: white;
  width: 140px;
  text-shadow: 0 1.5px 6px #1a9b30;
  font-weight: 600;
`;
const StyledInput = styled.input`
  width: 60px;
  border-color: #fff;
  border-radius: 0 2px 2px 0;
  margin: 0 5px;
  text-align: right;
`;
const StyledUnit = styled.span`
  width: 30px;
  background-color: #fff;
  border-color: #fff;
  border-radius: 0 2px 2px 0;
`;

const Field = ({ name, unit, change }) => (
  <>
    <StyledLabel>
      <StyledName>{name}</StyledName>
      <StyledInput placeholder="00" onChange={change} />
      <StyledUnit>{unit}</StyledUnit>
    </StyledLabel>
  </>
);

export default Field;
