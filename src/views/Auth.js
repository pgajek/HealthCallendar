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
  max-height: 400px;
  width: 80%;
  max-width: 400px;
  max-width: 320px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);

  @media (orientation: landscape) {
    height: 75%;
    margin-bottom: 10%;
  }
`;
const StyledLabel = styled.label``;
const StyledMainHeader = styled.h1`
  display: block;
  width: 60%;
  max-width: 200px;
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
    registration: false,
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleLinkClick = () => {
    this.setState({
      registration: !this.state.registration,
    });
  };
  render() {
    const { registration } = this.state;
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
          {registration ? null : (
            <StyledLink onClick={this.handleLinkClick}>Create Your Account</StyledLink>
          )}
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default Auth;
