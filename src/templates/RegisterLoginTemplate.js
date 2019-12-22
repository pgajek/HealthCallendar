import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #81dc5c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledAuthCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  width: 80vw;
  height: 60vh;
  max-width: 400px;
  max-height: 400px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);
`;

const RegisterLoginTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledAuthCard>{children}</StyledAuthCard>
  </StyledWrapper>
);

export default RegisterLoginTemplate;
