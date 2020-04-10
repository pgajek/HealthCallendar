import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100vw;
  min-height: 10vh;

  color: #fff;
  background-color: #4b4b4b;
`;

const Footer = () => <StyledFooter>Version 1.0.0</StyledFooter>;

export default Footer;
