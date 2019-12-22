import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';

const StyledIconButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 32%;
  border: 1px solid ${theme.lightGray};
  box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
  cursor: pointer;
  transition: background-color 0.2s;
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
  }
  ${({ secondary }) =>
    secondary &&
    css`
      box-shadow: 0px 1.5px 6px #84e75b;
    `}
`;
const StyledSvg = styled(Logout)`
  fill: hsl(102.5, 43.3%, 50.2%);
`;
const IconButton = ({ secondary, icon }) => (
  <StyledIconButton>
    <StyledSvg />
  </StyledIconButton>
);

export default IconButton;

// width: 48px;
// height: 48px;
// background-image: url(${({ icon }) => icon});
// background-repeat: no-repeat;
// background-position: 50% 50%;
// background-size: 60%;
// border-radius: 32%;
// border: 1px solid ${theme.lightGray};
// box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
// cursor: pointer;
// transition: background-color 0.2s;
// &:focus {
//   outline: none;
// }
// &:hover {
//   background-color: hsl(0, 0%, 45%);
//   border-color: hsl(103, 48%, 45%);
// }
// @media (min-width: 1024px) {
//   background-color: ${theme.darkGray};
//   box-shadow: 0px 1.5px 6px rgba(0, 0, 0, 0.38);
//   border-color: hsl(103, 48%, 23%);
// }
// ${({ secondary }) =>
//   secondary &&
//   css`
//     box-shadow: 0px 1.5px 6px #84e75b;
//   `}
