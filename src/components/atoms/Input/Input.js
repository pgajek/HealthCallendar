import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const Input = styled.input`
  background-color: #eee;
  border: 1px solid transparent;
  padding: 10px 10px;
  margin: 5px 0;
  transition: 0.5s;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  ::placeholder {
    letter-spacing: 1px;
    text-align: right;
  }

  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid ${theme.shadowGreen};
  }
  @media (min-width: 786px) {
    padding: 15px 30px;
  }
  ${({ holderLeft }) =>
    holderLeft &&
    css`
      &::placeholder {
        text-align: left;
      }
    `}
`;

export default Input;
