import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 420px;

  position: relative;
`;
const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 36px;

  background-color: #96e885;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);

  color: #fff;
  font-family: 'Architects Daughter', cursive;
  font-size: ${theme.fontSize.m};
  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.l};
    height: 51px;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    font-size: ${theme.fontSize.l};
    height: 51px;
  }
`;
const StyledValues = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  padding: 0 5%;
  color: #9e9c9c;
  font-size: ${theme.fontSize.xxl};
  & > span {
    font-size: ${theme.fontSize.s};
  }
  @media (orientation: portrait) and (min-width: 768px) {
    height: 92px;
    & > span {
      font-size: ${theme.fontSize.m};
    }
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    height: 92px;
    & > span {
      font-size: ${theme.fontSize.m};
    }
  }
`;
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 10%;
  transform: translateY(50%);
`;

const Controler = ({ label, children, click }) => (
  <StyledWrapper>
    <StyledLabel>{label}</StyledLabel>
    <StyledValues>{children}</StyledValues>
    <StyledButton round onClick={click}>
      +
    </StyledButton>
  </StyledWrapper>
);

export default Controler;
