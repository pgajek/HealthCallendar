import React, { Component } from 'react';
import MainTemplate from 'templates/MainTemplate.js';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/atoms/Button/Button';
import { ReactComponent as Guy } from 'assets/Graphics/guyOnPhone.svg';
import { theme } from 'theme/mainTheme.js';

const NoDecorationLink = styled(Link)`
  text-decoration: none;
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  @media (orientation: landscape) {
    padding-left: 49%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2vh 0;
  height: 30px;
  width: 60%;

  font-size: ${theme.fontSize.s};
  text-decoration: none;
  color: #4b4b4b;

  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);

  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.m};
  }
  @media (orientation: portrait) and (min-width: 1024px) {
    font-size: ${theme.fontSize.l};
    height: 50px;
  }
`;

const GreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${theme.mainGreen};
  @media (orientation: landscape) {
    width: 50%;
    height: 90%;

    position: fixed;
    top: 10vh;
    left: 0;

    padding-top: 5%;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    top: 56px;
  }
`;
const StyledButton = styled(Button)`
  padding: 2vh 4vw;
  margin: 5vh auto;
  @media (orientation: landscape) {
    margin: 10vh auto;
  }
  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.l};
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    font-size: ${theme.fontSize.l};
  }
`;
const StyledGuy = styled(Guy)`
  width: 40vmin;
  height: 40vmin;
  @media (orientation: landscape) {
    width: 100%;
  }
`;
const DatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding-top: 5vh;

  background-color: #f7f5f5;

  @media (orientation: landscape) {
    width: 100%;
    height: 100%;
  }
`;
const StyledHeader = styled.h2`
  padding: 3vmin;
  width: 80%;
  margin-bottom: 30px;

  background-color: ${theme.mainGreen};

  color: #6b6b6b;
  font-size: ${theme.fontSize.m};
  -webkit-text-stroke: 0.5px #9b9b9b;
  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.xl};
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    font-size: ${theme.fontSize.xl};
  }
`;

class BodySizeList extends Component {
  state = { dates: [] };
  componentDidMount() {
    const { userId, token } = this.props;

    fetch(`https://164.132.97.42:8443/health-calendar/api/body/dates/user-id/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.length > 0) {
          this.setState({
            ...this.state,
            dates: response,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    const dates = this.state.dates.reverse().map((item, index) => (
      <StyledLink key={index} to={`/bodySizeList/${item}`}>
        <h2>{`${item}`}</h2>
      </StyledLink>
    ));

    return (
      <MainTemplate>
        <StyledWrapper>
          <GreenWrapper>
            <NoDecorationLink to="/bodySize">
              <StyledButton>New Measurement</StyledButton>
            </NoDecorationLink>
            <StyledGuy />
          </GreenWrapper>
          <DatesWrapper>
            <StyledHeader> List of Measurements</StyledHeader>
            {dates.length > 0 ? dates : 'No measurements yet'}
          </DatesWrapper>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token }) => ({
  userId,
  token,
});

export default connect(mapStateToProps)(BodySizeList);
