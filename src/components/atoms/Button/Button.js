import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #707070;
  -webkit-text-stroke: 0.5px #9b9b9b;
  background-color: #fff;

  min-width: 105px;
  min-height: 30px;
  padding: 0 10px;

  border: none;
  border-radius: 50px;

  font-size: ${theme.fontSize.xs};
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.38);

  cursor: pointer;

  ${({ color }) =>
    color &&
    css`
      background-color: ${theme.mainGreen};
    `}

  ${({ round }) =>
    round &&
    css`
      border-radius: 50%;
      min-height: 16px;
      min-width: 16px;
      width: 16px;
      height: 16px;
      color: #444;
      font-size: ${theme.fontSize.s};
      padding: 0;
    `}

  &:focus {
    outline: none;
  }
  @media (orientation: portrait) and (min-width: 768px) {
    min-width: 140px;
    min-height: 60px;
    font-size: ${theme.fontSize.m};

    ${({ round }) =>
      round &&
      css`
        min-height: 16px;
        min-width: 16px;
        width: 32px;
        height: 32px;
        font-size: ${theme.fontSize.m};
        font-weight: 900;
      `}
  }
`;

export default Button;
