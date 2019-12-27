import React, { Component } from 'react';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.mainGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledForm = styled.form`
  background-color: #fff;
  height: 50%;
  width: 80%;
  max-width: 320px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const StyledLabel = styled.label``;
const StyledMainHeader = styled.h1`
  display: block;
  width: 60%;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1.5px 0 #000, 3px 3px 3px ${theme.darkGray};
  margin-bottom: 10%;
`;
const StyledHeader = styled.h3``;
const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: underline;
`;

class Auth extends Component {
  state = {
    name: '',
    password: '',
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { registration } = this.props;
    return (
      <StyledWrapper>
        <StyledMainHeader>Health Callendar</StyledMainHeader>
        <StyledForm>
          <StyledHeader>Sign In!</StyledHeader>
          <StyledLabel>
            <Input name="login" placeholder="LOGIN" type="text" onChange={this.handleInputChange} />
          </StyledLabel>
          <StyledLabel>
            <Input
              name="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          {registration && (
            <StyledLabel>
              <Input
                name="passwordReapeated"
                type="password"
                placeholder="Reapeat your password"
                onChange={this.handleInputChange}
              />
            </StyledLabel>
          )}
          {registration ? (
            <Button color={theme.lightGreen} onClick={this.handleRegistration}>
              Registration
            </Button>
          ) : (
            <Button color={theme.lightGreen} onClick={this.handleSignIn}>
              Sign In
            </Button>
          )}
          {registration ? null : <StyledLink>Create Your Account</StyledLink>}
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default Auth;
