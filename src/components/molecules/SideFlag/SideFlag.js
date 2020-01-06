import styled, { css } from 'styled-components';
import { theme } from 'theme/mainTheme.js';

const SideFlag = styled.div`
  width: 100vw;
  padding-right: 2%;
  text-align: center;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.lightGray};
  color: #4b4b4b;
  z-index: 99;
  font-weight: 600;

  &:after {
    content: '';
    display: block;
    position: absolute;

    bottom: -25%;
    left: 0;
    width: 100%;
    background-color: #69b749;
    height: 2vh;
    border-top: 1px solid hsl(152.9, 89.4%, 18.4%);
    border-bottom: 1px solid hsl(152.9, 89.4%, 18.4%);
    box-shadow: 0 1.5px 3px #292929;
    justify-content: flex-end;
  }
  ${({ secondary }) =>
    secondary &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      justify-content: flex-end;
      background-color: ${theme.darkGray};
      &:after {
        display: none;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        top: -25%;
        left: 0;
        width: 100%;
        background-color: #69b749;
        height: 2vh;
        border-top: 1px solid hsl(152.9, 89.4%, 18.4%);
        border-bottom: 1px solid hsl(152.9, 89.4%, 18.4%);
        box-shadow: 0 1.5px 3px #292929;
      }
    `}
  ${({ primarry }) =>
    primarry &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 5px;
      font-size: 1.8rem;
    `}
  @media(min-width: 1024px) {
    top: 15%;
    left: 0;
    height: 15%;
    max-height: 126px;
    width: 20%;
    font-size: 3rem;
    font-weight: 700;
    text-shadow: 0 1.5px 6px #86eb5c;
    box-shadow: 1px 2px 6px #222222;
    background-color: #69b749;

    &:after {
      display: none;
    }
    ${({ primarry }) =>
      primarry &&
      css`
        justify-content: flex-end;
      `}
    ${({ secondary }) =>
      secondary &&
      css`
        top: 75%;
        left: 80%;
        justify-content: flex-start;
        padding-right: 0;
        padding-left: 2%;
        box-shadow: -1px 2px 6px #222222;
        &:before {
          display: none;
        }
      `}
  }
`;

export default SideFlag;
