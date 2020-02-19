import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: ${theme.mainGreen};
  width: 105px;
  height: 30px;
  font-size: 1.4rem;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ color }) => color};
    `}
  ${({ round }) =>
    round &&
    css`
      border-radius: 50%;
      width: 24px;
      height: 24px;
    `}

  &:focus {
    outline: none;
  }
`;

export default Button;
