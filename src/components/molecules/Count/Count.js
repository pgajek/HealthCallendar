import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Glass } from 'assets/icons/glass.svg';
import { ReactComponent as Wine } from 'assets/icons/kieliszek.svg';
import { ReactComponent as Muffin } from 'assets/icons/muffin.svg';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div``;
const InnerWrapper = styled.div``;
const StyledCounter = styled.div``;
const StyledMuffin = styled(Muffin)`
  width: 75px;
  ${({ filled }) =>
    filled &&
    css`
      fill: brown;
      transition: fill 0.3s ease;
    `}
`;
const StyledGlass = styled(Glass)`
  width: 75px;

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
  width: 75px;
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
