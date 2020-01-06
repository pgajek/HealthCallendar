import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import hamburger from 'assets/icons/hamburger.svg';
import wrongicon from 'assets/icons/wrongicon.svg';
import { ReactComponent as Logout } from 'assets/icons/logout.svg';
const StyledNav = styled.nav`
  background-color: #69b749;
  z-index: 999;
  width: 60vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ active }) => (active ? 'translateX(40vw)' : 'translateX(100vw)')};
  color: #fff;
  text-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.38);
  transition: transform 0.3s;

  @media (orientation: landscape) {
    transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100vw)')};
    width: 100vw;
  }
  @media (min-width: 768px) {
    width: 100vw;
    height: 10%;
    max-height: 56px;
    top: 0;
    left: 0;
    transform: translateX(0);
  }
`;
const StyledList = styled.ul`
  background-color: #7cd05a;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledLogo = styled.h1`
  font-size: 2rem;
`;
const StyledListItem = styled.li`
  background-color: #81dc5c;
  border: 1px solid #9be77d;
  height: 48px;
  width: 100%;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (min-width: 768px) {
    height: 100%;
    margin: 0;
    font-weight: 600;
  }
`;
const StyledHamburger = styled.button`
  position: absolute;
  top: 2vh;
  left: -50px;
  background-image: url(${({ active }) => (active ? wrongicon : hamburger)});
  background-position: 50% 50%;
  background-size: contain;
  background-color: transparent;
  border: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  transition: 0.3s;
  @media (orientation: landscape) {
    top: 4%;
    left: ${({ active }) => (active ? '15px' : '-50px')};
    border-radius: ${({ active }) => (active ? '50%' : '0')};
    background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
    z-index: 99;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

class Nav extends Component {
  state = { active: false };
  handleBurgerClick = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }));
  };
  render() {
    return (
      <StyledNav active={this.state.active}>
        <StyledHamburger active={this.state.active} onClick={this.handleBurgerClick} />
        <StyledList>
          <StyledListItem>
            <StyledLogo>HealthCallendar</StyledLogo>
          </StyledListItem>
          <StyledListItem>Page2</StyledListItem>
          <StyledListItem>Page3</StyledListItem>
          <StyledListItem>Page4</StyledListItem>
          <StyledListItem>Page5</StyledListItem>
          <StyledListItem>Page6</StyledListItem>
          <StyledListItem>
            <IconButton>
              <Logout />
            </IconButton>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    );
  }
}

export default Nav;
