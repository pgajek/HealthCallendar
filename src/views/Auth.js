import React, { Component } from 'react';
import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Redirect } from 'react-router-dom';
import { theme } from 'theme/mainTheme.js';
import { connect } from 'react-redux';
import { authenticate as authenticateAction } from 'actions/index.js';
import { ReactComponent as Logo } from 'assets/icons/fixedLogo.svg';
import { regex } from 'helpers/regex.js';
import { checkValidity } from 'helpers/index.js';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.mainGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & button {
    color: #000000;
    -webkit-text-stroke: 0 transparent;
  }
  @media (orientation: landscape) {
    height: 140vh;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    height: 100vh;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 80%;
  max-height: 400px;
  width: 80%;
  max-width: 320px;

  background-color: #fff;
  box-shadow: 0 10px 20px 10px rgba(0, 0, 0, 0.2);

  @media (orientation: landscape) {
    height: 70%;
    width: 80%;
  }
`;
const StyledLabel = styled.label``;
const StyledMainHeader = styled.h1`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLogo = styled(Logo)`
  width: 80%;
  max-width: 400px;
`;
const StyledHeader = styled.h3`
  text-transform: uppercase;
  color: #222222;
`;
const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
`;
const StyledButton = styled(Button)`
  @media (orientation: portrait) and (min-width: 768px) {
    min-width: 105px;
    min-height: 30px;
    font-size: ${theme.fontSize.xs};
  }
`;
const StyledError = styled.div`
  color: red;
  font-size: ${theme.fontSize.xxs};
  width: 100%;
  max-width: 160px;
`;
class Auth extends Component {
  state = {
    login: '',
    password: '',
    registration: false,
    email: '',
    secondPassword: '',
    errors: {},
  };
  componentDidMount() {
    const { userIsLogged } = this.props;
    if (window.localStorage.getItem('userId')) {
      const userData = {
        userId: window.localStorage.getItem('userId'),
        token: window.localStorage.getItem('token'),
        login: window.localStorage.getItem('loginName'),
      };
      userIsLogged(userData);
    }
  }
  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleLinkClick = () => {
    this.setState({
      registration: !this.state.registration,
    });
  };
  hadnleRegistration = (e) => {
    e.preventDefault();
    const { login, password, email, secondPassword } = this.state;
    const isPasswordValidate = checkValidity(password, regex.password);
    const isSecondPasswordValidate = checkValidity(secondPassword, regex.password);
    const isLoginValidate = checkValidity(login, regex.login);
    const isEmailValidate = checkValidity(email, regex.email);
    if (
      isLoginValidate &&
      isPasswordValidate &&
      isEmailValidate &&
      isSecondPasswordValidate &&
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
      }).then((response) => response.json());

      this.setState({
        login: '',
        password: '',
        registration: false,
        email: '',
        secondPassword: '',
      });
    } else if (!isLoginValidate) {
      this.setState({
        ...this.state,
        errors: {
          login: !isLoginValidate,
        },
      });
    } else if (!isPasswordValidate) {
      this.setState({
        ...this.state,
        errors: {
          password: !isPasswordValidate,
        },
      });
    } else if (!isSecondPasswordValidate) {
      this.setState({
        ...this.state,
        errors: {
          secondPassword: !isSecondPasswordValidate,
        },
      });
    } else if (!isEmailValidate) {
      this.setState({
        ...this.state,
        errors: {
          email: !isEmailValidate,
        },
      });
    }
  };
  handleSignIn = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    const user = { loginName: login, password };
    const isLoginValidate = checkValidity(login, regex.login);
    const isPasswordValidate = checkValidity(password, regex.password);
    if (isLoginValidate) {
      if (isPasswordValidate) {
        this.props.authenticate(user);
      } else {
        this.setState({
          ...this.state,
          errors: {
            ...this.state.errors,
            login: !isLoginValidate,
            password: !isPasswordValidate,
          },
        });
      }
    } else {
      this.setState({
        ...this.state,
        errors: {
          ...this.state.errors,
          login: !isLoginValidate,
          password: false,
        },
      });
    }
  };

  render() {
    const { registration, errors } = this.state;
    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/home" />;
    }
    return (
      <StyledWrapper>
        <StyledMainHeader>
          <StyledLogo />
        </StyledMainHeader>
        <StyledForm>
          <StyledHeader>Sign In!</StyledHeader>
          <StyledLabel htmlFor="login">
            <Input
              holderLeft
              id="login"
              name="login"
              placeholder="LOGIN"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.login}
              required
            />
            {errors.login && <StyledError>Login requires minimum 6 signs</StyledError>}
          </StyledLabel>
          {registration && (
            <StyledLabel htmlFor="email">
              <Input
                holderLeft
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                onChange={this.handleInputChange}
                value={this.state.email}
                required
              />
              {errors.email && <StyledError>Please insert proper email adress.</StyledError>}
            </StyledLabel>
          )}
          <StyledLabel htmlFor="password">
            <Input
              holderLeft
              id="password"
              name="password"
              type="password"
              placeholder="PASSWORD"
              onChange={this.handleInputChange}
              value={this.state.password}
              required
            />
            {errors.password && (
              <StyledError>
                Password requires min 6 characters, one capital letter and one number.
              </StyledError>
            )}
          </StyledLabel>
          {registration && (
            <StyledLabel htmlFor="secondPassword">
              <Input
                HolderLeft
                id="secondPassword"
                name="secondPassword"
                type="password"
                placeholder="Reapeat your password"
                onChange={this.handleInputChange}
                value={this.state.secondPassword}
                required
              />
              {errors.secondPassword && <StyledError>Passwords must match.</StyledError>}
            </StyledLabel>
          )}
          {registration ? (
            <StyledButton color onClick={(e) => this.hadnleRegistration(e)}>
              Registration
            </StyledButton>
          ) : (
            <StyledButton
              color
              onClick={(e) => this.handleSignIn(e)}
              onTouchEnd={(e) => this.handleSignIn(e)}
            >
              Sign In
            </StyledButton>
          )}
          {registration ? null : (
            <StyledLink onClick={this.handleLinkClick}>Create Your Account</StyledLink>
          )}
        </StyledForm>
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ userId = null, token, isLoggedIn }) => ({
  userId,
  token,
  isLoggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  authenticate: (user) => dispatch(authenticateAction(user)),
  userIsLogged: (userData) => dispatch({ type: 'AUTH_SUCCESS', payload: userData }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
