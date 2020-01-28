import React from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';
import SideFlag from 'components/molecules/SideFlag/SideFlag.js';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { ReactComponent as WrongIcon } from 'assets/icons/wrongicon.svg';

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
    min-height: 80vh;
    width: 80vw;
    border: 5px solid white;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    padding: 5vh 5vw;
  }
`;

const FormTemplate = ({ children, header, yesClick, wrongClick }) => (
  <StyledWrapper>
    <Nav />
    <SideFlag primarry>{header}</SideFlag>
    <StyledForm>{children}</StyledForm>
    <SideFlag secondary>
      <IconButton onClick={yesClick}>
        <YesIcon />
      </IconButton>
      <IconButton onClick={wrongClick}>
        <WrongIcon />
      </IconButton>
    </SideFlag>
  </StyledWrapper>
);

export default FormTemplate;
