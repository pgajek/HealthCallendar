import React, { Component } from 'react';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Redirect } from 'react-router-dom';
import { theme } from 'theme/mainTheme.js';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions/index.js';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

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
  max-width: 400px;
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
  cursor: pointer;
`;

class Auth extends Component {
  state = {
    login: '',
    password: '',
    registration: false,
    email: '',
    secondPassword: '',
  };
  componentDidMount() {
    const { userdIsLogged } = this.props;
    if (window.sessionStorage.getItem('userId')) {
      const userData = {
        userId: window.sessionStorage.getItem('userId'),
        token: window.sessionStorage.getItem('token'),
        login: window.sessionStorage.getItem('loginName'),
      };
      userdIsLogged(userData);
    }
  }
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
  hadnleRegistration = e => {
    e.preventDefault();
    const { login, password, email, secondPassword } = this.state;
    if (
      login.length > 4 &&
      password.length > 4 &&
      email.length > 4 &&
      password === secondPassword
    ) {
      const user = {
        email: this.state.email,
        loginName: this.state.login,
        nick: this.state.login,
        password: this.state.password,
      };
      fetch('https://164.132.97.42:8443/health-calendar/api/user/new-account', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => console.log(data));

      this.setState({
        login: '',
        password: '',
        registration: false,
        email: '',
        secondPassword: '',
      });
    } else {
      console.log('wrong');
    }
  };
  handleSignIn = e => {
    e.preventDefault();
    const { login, password } = this.state;
    const user = { loginName: login, password, roles: 'USER' };
    if (login.length > 4 && password.length > 4) {
      this.props.authenticate(user);
    } else {
      console.log('wrong login');
    }
    this.setState({
      login: '',
      password: '',
    });
  };
  render() {
    const { registration } = this.state;
    const { userId } = this.props;
    if (userId) {
      return <Redirect to="/home" />;
    }
    return (
      <StyledWrapper>
        <StyledMainHeader>
          <Logo />
        </StyledMainHeader>
        <StyledForm>
          <StyledHeader>Sign In!</StyledHeader>
          <StyledLabel>
            <Input
              name="login"
              placeholder="LOGIN"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.login}
            />
          </StyledLabel>
          {registration && (
            <StyledLabel>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                onChange={this.handleInputChange}
                value={this.state.email}
              />
            </StyledLabel>
          )}
          <StyledLabel>
            <Input
              name="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handleInputChange}
              value={this.state.password}
            />
          </StyledLabel>
          {registration && (
            <StyledLabel>
              <Input
                name="secondPassword"
                type="password"
                placeholder="Reapeat your password"
                onChange={this.handleInputChange}
                value={this.state.secondPassword}
              />
            </StyledLabel>
          )}
          {registration ? (
            <Button color={theme.lightGreen} onClick={e => this.hadnleRegistration(e)}>
              Registration
            </Button>
          ) : (
            <Button color={theme.lightGreen} onClick={e => this.handleSignIn(e)}>
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
const mapStateToProps = ({ userId = null, token }) => ({
  userId,
  token,
});
const mapDispatchToProps = dispatch => ({
  authenticate: user => dispatch(authenticateAction(user)),
  userdIsLogged: userData => dispatch({ type: 'AUTH_SUCCESS', payload: userData }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
