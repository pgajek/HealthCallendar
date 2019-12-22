import React from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
`;

const StyledForm = styled.form`
  position: absolute;

  min-height: 100vh;
  width: 100vw;
  background-color: #4b4b4b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20vh 0;

  @media (min-width: 1024px) {
    height: 85vh;
    width: 80vw;
    border: 5px solid white;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const FormTemplate = ({ children }) => (
  <StyledWrapper>
    <StyledForm>
      <Nav />
      {children}
    </StyledForm>
  </StyledWrapper>
);

export default FormTemplate;
