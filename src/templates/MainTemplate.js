import React from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';

const StyledWrapper = styled.div``;

const MainTemplate = ({ children }) => (
  <StyledWrapper>
    <Nav />
    {children}
  </StyledWrapper>
);

export default MainTemplate;
