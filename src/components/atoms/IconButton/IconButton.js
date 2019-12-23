import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as yesIcon } from 'assets/icons/yesicon.svg';
import { ReactComponent as wrongIcon } from 'assets/icons/wrongicon.svg';
import { ReactComponent as hamburger } from 'assets/icons/hamburger.svg';

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
const StyledLogout = styled(Logout)`
  fill: hsl(102.5, 43.3%, 50.2%);
`;
const StyledWrong = styled(wrongIcon)`
  fill: hsl(102.5, 43.3%, 50.2%);
`;
const StyledYesIcon = styled(yesIcon)`
  fill: hsl(102.5, 43.3%, 50.2%);
`;
const StyledBurger = styled(hamburger)`
  fill: hsl(102.5, 43.3%, 50.2%);
`;
const IconButton = ({ secondary, yes, wrong, logout, burger, onClick }) => (
  <StyledIconButton onClick={onClick}>
    {logout && <StyledLogout />}
    {wrong && <StyledWrong />}
    {yes && <StyledYesIcon />}
    {burger && <StyledBurger />}
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
