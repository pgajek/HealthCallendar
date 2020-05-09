import React from 'react';
import styled, { css } from 'styled-components';

const StyledIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 45px;
  margin: 0 5px;
  border: none;
  border-radius: 17px;

  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.38);

  cursor: pointer;
  transition: background-color 0.2s;

  @media (orientation: portrait) and (min-width: 768px) {
    width: 66px;
    height: 66px;
    border-radius: 16px;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    width: 66px;
    height: 66px;
    border-radius: 16px;
  }

  &:focus {
    outline: none;
  }
  & svg {
    .path {
      fill: #9b9b9b;
    }
    width: 70%;
    height: 70%;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      box-shadow: none;
      &::hover {
        filter: none;
      }
    `}

  ${({ dark }) =>
    dark &&
    css`
      background-color: #535353;
      border-color: #535353;
      & svg {
        .path {
          fill: #dcdcdc;
        }
      }
      &:hover {
        filter: brightness(1.2);
      }
    `}
`;

const IconButton = ({ secondary, children, onClick, green }) => (
  <StyledIconButton onClick={onClick} secondary={secondary} green={green}>
    {children}
  </StyledIconButton>
);

export default IconButton;
