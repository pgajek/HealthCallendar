import React from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';
import Footer from 'components/molecules/Footer/Footer';

const StyledWrapper = styled.div`
  position: relative;
  padding: 10vh 0;
  min-height: 100vh;
  width: 100vw;

  @media (min-width: 1024px) {
    padding: 56px 0 10vh 0;
  }
`;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <Nav />
    {children}
    <Footer />
  </StyledWrapper>
);

export default MainTemplate;
