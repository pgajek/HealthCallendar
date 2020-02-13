import React from 'react';
import styled from 'styled-components';
import SideFlag from 'components/molecules/SideFlag/SideFlag.js';
import IconButton from 'components/atoms/IconButton/IconButton';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { ReactComponent as WrongIcon } from 'assets/icons/wrongicon.svg';
import MainTemplate from 'templates/MainTemplate.js';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

const StyledForm = styled.form`
  position: relative;
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
    padding: 5vh 5vw;
  }
`;

const FormTemplate = ({ children, header, yesClick, wrongClick }) => (
  <MainTemplate>
    <StyledWrapper>
      <SideFlag primarry>{header}</SideFlag>
      <StyledForm>{children}</StyledForm>
      <SideFlag secondary>
        <IconButton onClick={yesClick}>
          <YesIcon />
        </IconButton>
        <IconButton onClick={wrongClick}>
          <Link to="/home">
            <WrongIcon />
          </Link>
        </IconButton>
      </SideFlag>
    </StyledWrapper>
  </MainTemplate>
);

export default FormTemplate;
