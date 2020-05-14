import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as Hamburger } from 'assets/icons/hamburger.svg';
import { ReactComponent as WrongIcon } from 'assets/icons/wrongicon.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
import { ReactComponent as Logo } from 'assets/icons/fixedLogo.svg';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { theme } from 'theme/mainTheme.js';

const StyledNav = styled.nav`
  width: 100vw;
  height: 91vh;

  z-index: 98;
  position: fixed;
  top: 0;
  left: 0;

  color: #fff;
  background-color: #4b4b4b;

  transform: ${({ active }) => (active ? 'translateY(0vh)' : 'translateY(-81vh)')};
  text-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.38);
  transition: transform 0.3s;

  @media (min-width: 1024px) {
    width: 100vw;
    height: 56px;
    top: 0;
    left: 0;
    padding: 0 2vw;
    transform: translateX(0);
  }
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: #4b4b4b;
  list-style-type: none;
  @media (min-width: 768px) {
    font-size: ${theme.fontSize.l};
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    font-size: ${theme.fontSize.m};
  }
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  flex-grow: 1;
  margin: 5px 0;

  background-color: #4e4e4e;
  border-radius: 35px;

  cursor: pointer;

  transition: 0.2s;
  &::hover {
    filter: brightness(0.95);
  }
  @media (min-width: 1024px) {
    height: 100%;
    margin: 0;
    font-weight: 600;
    border-radius: 0;
    background-color: transparent;
    &:nth-child(1) {
      display: none;
    }
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const StyledHamburger = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;

  height: 10vh;
  width: 10vh;

  background-color: transparent;
  border: none;

  cursor: pointer;
  transition: 0.3s;

  ::before {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    height: 100%;
    width: 110vw;

    background-color: #4b4b4b;
  }
  & svg {
    height: 50%;
    width: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
  }
  &:focus {
    outline: none;
  }
  transform: ${({ active }) => (active ? 'translateY(90vh)' : 'translateY(0vh)')};
  @media (orientation: landscape) {
    & svg {
      height: 80%;
      width: 80%;
    }
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

class Nav extends Component {
  state = { active: false, isUserLoggedIn: true };
  handleBurgerClick = () => {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  };
  handleLogout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('loginName');
    this.props.logout();
    this.setState((prevState) => ({
      ...prevState,
      isUserLoggedIn: false,
    }));
  };
  render() {
    return (
      <>
        <StyledHamburger active={this.state.active} onClick={this.handleBurgerClick}>
          {this.state.active ? <WrongIcon /> : <Hamburger />}
        </StyledHamburger>
        <StyledNav active={this.state.active}>
          {this.state.isUserLoggedIn ? null : <Redirect to="/" />}

          <StyledList>
            <StyledListItem>
              <Logo />
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/home">Main Page</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/bodySizeList">Body Size</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/dietPage">Diet</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/training">Training</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <StyledLink to="/Profile">Profile</StyledLink>
            </StyledListItem>
            <StyledListItem>
              <IconButton onClick={this.handleLogout} secondary>
                <Logout />
              </IconButton>
            </StyledListItem>
          </StyledList>
        </StyledNav>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch({ type: 'USER_LOGOUT' }),
});
export default connect(null, mapDispatchToProps)(Nav);
