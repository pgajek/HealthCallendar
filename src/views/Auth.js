import React from 'react';
import RegisterLoginTemplate from 'templates/RegisterLoginTemplate.js';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const StyledHeading = styled.h1`
  margin: 5vh 0;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  width: 80%;
  text-align: center;
`;

const Auth = () => (
  <RegisterLoginTemplate>
    <StyledHeading>HEALTHCARE</StyledHeading>
    <p>Your everyday healthcallendar</p>
    <StyledForm>
      <Input placeholder="login" />
      <Input placeholder="password" />
      <p> Or you can register your account</p>
      <Button>LogIn</Button>
    </StyledForm>
  </RegisterLoginTemplate>
);

export default Auth;
