import styled from 'styled-components';

const Input = styled.input`
  background-color: #81dc5c;
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
    border: 1px solid #81dc5c;
  }
  @media (min-width: 786px) {
    padding: 15px 30px;
  }
`;

export default Input;
