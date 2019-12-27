import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const Input = styled.input`
  background-color: #eee;
  border: 1px solid transparent;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 5px 0;
  transition: 0.5s;
  ::placeholder {
    letter-spacing: 1px;
  }
  &:focus {
    outline: none;
    background-color: #fff;
    border: 1px solid ${theme.shadowGreen};
  }
  @media (min-width: 786px) {
    padding: 15px 30px;
  }
`;

export default Input;
