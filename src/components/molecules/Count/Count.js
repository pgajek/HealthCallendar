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
  state = { count: 0 };
  countUp = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  countDown = () => {
    if (this.state.count > 0)
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
  };
  iconsColor = () => {
    let variants = [];
    for (let i = 0; i < this.props.howMany; i++) {
      if (i < this.state.count) {
        variants.push(true);
      } else {
        variants.push(false);
      }
    }
    return variants;
  };
  render() {
    const counts = this.iconsColor();
    const { wine, glass, snack } = this.props;
    return (
      <StyledWrapper>
        <InnerWrapper>
          {glass && counts.map((item, index) => <StyledGlass key={index} filled={item} />)}
          {wine && counts.map((item, index) => <StyledWine key={index} filled={item} />)}
          {snack && counts.map((item, index) => <StyledMuffin key={index} filled={item} />)}
        </InnerWrapper>
        <StyledCounter>
          <Button round onClick={this.countUp}>
            +
          </Button>
          <Button round onClick={this.countDown}>
            -
          </Button>
        </StyledCounter>
      </StyledWrapper>
    );
  }
}

export default Count;
