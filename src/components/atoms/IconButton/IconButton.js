import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const StyledIconButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 32%;
  border: 1px solid ${theme.lightGray};
  background-color: ${theme.lightGray};
  box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 0 5px;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: hsl(0, 0%, 45%);
    border-color: hsl(103, 48%, 45%);
  }
  @media (min-width: 1024px) {
    background-color: ${theme.darkGray};
    box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
    border-color: hsl(103, 48%, 23%);
    height: 40px;
    width: 40px;
  }
  & svg {
    .path {
      fill: ${theme.darkGray};
    }
    width: 80%;
    height: 80%;
    @media (min-width: 1024px) {
      .path {
        fill: hsl(102.5, 43.3%, 50.2%);
      }
    }
  }
  ${({ secondary }) =>
    secondary &&
    css`
      box-shadow: 0px 1.5px 6px #84e75b;
    `}

  ${({ green }) =>
    green &&
    css`
      background-color: ${theme.mainGreen} !important;
      border-color: ${theme.mainGreen} !important;
      & svg {
        .path {
          fill: ${theme.darkGray};
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
