import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Glass } from 'assets/icons/glass.svg';
import { ReactComponent as Wine } from 'assets/icons/kieliszek.svg';
import { ReactComponent as Muffin } from 'assets/icons/muffin.svg';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 80%;
  max-width: 670px;
  padding: 5px;
  min-height: 15vh;

  background-color: #f0f0f0;
  border: 1px solid #d7ead3;
  border-radius: 21px;

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
`;
const InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: flex-start;
  width: 80%;
  height: 100%;
`;
const StyledCounter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 20%;
  height: 100%;
`;
const StyledMuffin = styled(Muffin)`
  min-width: 16%;
  max-width: 22%;
  max-height: 90%;

  ${({ filled }) =>
    filled &&
    css`
      fill: brown;
      transition: fill 0.3s ease;
    `}
`;
const StyledGlass = styled(Glass)`
  min-width: 16%;
  max-width: 22%;
  min-height: 45%;
  max-height: 60%;

  .st5,
  .st6 {
    fill: transparent;
  }
  ${({ filled }) =>
    filled &&
    css`
      .st5,
      .st6 {
        fill: #7292b7;
        transition: fill 0.3s ease;
      }
    `}
`;
const StyledWine = styled(Wine)`
  min-width: 16%;
  max-width: 22%;
  max-height: 90%;
  .glassst7,
  .glassst8 {
    fill: transparent;
    transition: fill 0.3s linear;
  }
  ${({ filled }) =>
    filled &&
    css`
      .glassst7,
      .glassst8 {
        fill: #87171a;
      }
    `}
`;
class Count extends Component {
  iconsColor = () => {
    let variants = [];
    for (let i = 0; i < this.props.howMany; i++) {
      if (i < this.props.count) {
        variants.push(true);
      } else {
        variants.push(false);
      }
    }
    return variants;
  };

  render() {
    const counts = this.iconsColor();

    const { aspect, click } = this.props;
    return (
      <StyledWrapper>
        <InnerWrapper>
          {aspect === 'portionsDrink' &&
            counts.map((item, index) => <StyledGlass key={index} filled={item ? 1 : 0} />)}
          {aspect === 'portionsAlcohol' &&
            counts.map((item, index) => <StyledWine key={index} filled={item ? 1 : 0} />)}
          {aspect === 'portionsSnack' &&
            counts.map((item, index) => <StyledMuffin key={index} filled={item ? 1 : 0} />)}
        </InnerWrapper>
        <StyledCounter>
          <Button round onClick={() => click(this.props.aspect, '+')}>
            +
          </Button>
          <Button round onClick={() => click(this.props.aspect, '-')}>
            -
          </Button>
        </StyledCounter>
      </StyledWrapper>
    );
  }
}

export default Count;
