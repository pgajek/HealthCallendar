import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate.js';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { theme } from 'theme/mainTheme.js';
import { ReactComponent as ToDo } from 'assets/Graphics/todo.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 100%;
  min-height: 80vh;

  background-color: ${theme.mainGreen};
  @media (min-width: 1024px) {
    align-items: flex-start;
    padding-left: 10vw;
    position: relative;
    min-height: 90vh;
  }
`;
const StyledHeader = styled.h2`
  font-size: ${theme.fontSize.l};
  color: #fff;
  font-weight: bold;
  text-shadow: 0px 1px 2px #000;
  text-align: center;
  & > span {
    display: block;
    width: 100%;
  }
  padding: 2vh;
  margin: 0 auto;
  @media (orientation: landscape) {
    font-size: ${theme.fontSize.xl};
    text-align: left;
    width: 80%;
  }
  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.xxl};
  }
  @media (min-width: 1024px) {
    font-size: 5rem;
    width: 100%;
    padding: 2vh 0;
  }
`;
const StyledTable = styled.div`
  width: 80%;
  max-width: 500px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
  & span {
    padding-left: 5px;
    display: block;
    width: 50%;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    max-width: 600px;
  }
`;
const StyledTableHeader = styled.h3`
  background-color: #4b4b4b;
  height: 7vh;
  display: flex;
  align-items: center;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  font-size: ${theme.fontSize.m};
  padding-left: 5%;
  @media (orientation: landscape) {
    height: 15vh;
  }
  @media (min-width: 1024px) {
    font-size: ${theme.fontSize.xl};
  }
`;

const StyledTableLine = styled.div`
  position: relative;
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  background-color: #dddddd;
  font-weight: 700;
  padding-left: 5%;
  &:nth-child(odd) {
    background-color: #fff;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    width: 95%;
    background-color: #4b4b4b;
  }
  @media (orientation: landscape) {
    height: 10vh;
  }
  @media (min-width: 768px) {
    ::after {
      height: 2px;
    }
  }
  @media (min-width: 1024px) {
    font-size: ${theme.fontSize.m};
  }
`;
const StyledToDo = styled(ToDo)`
  height: 20vmax;
  width: 20vmax;
  @media (min-width: 1024px) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 40vmax;
  }
`;
const StyledLink = styled(Link)`
  margin: 15px 0;
  text-decoration: none;
`;
class BodySizeDetails extends Component {
  state = {
    armSize: '',
    bodyWeight: '',
    bustSize: '',
    calf: '',
    femoralSize: '',
    hipsSize: '',
    neckSize: '',
    waist: '',
    date: '',
  };

  componentDidMount() {
    const { userId, token, match } = this.props;

    fetch(`https://164.132.97.42:8443/health-calendar/api/body/${match.params.id}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          armSize: response.armSize,
          bodyWeight: response.bodyWeight,
          bustSize: response.bustSize,
          calf: response.calf,
          dateMeasurement: response.dateMeasurement,
          femoralSize: response.femoralSize,
          hipsSize: response.hipsSize,
          neckSize: response.neckSize,
          waist: response.waist,
        });
      });
  }

  render() {
    const {
      waist,
      neckSize,
      hipsSize,
      femoralSize,
      calf,
      bustSize,
      bodyWeight,
      armSize,
      dateMeasurement,
    } = this.state;

    return (
      <MainTemplate>
        <StyledWrapper>
          <StyledHeader>
            Date of measurment:<span> {dateMeasurement}</span>
          </StyledHeader>
          <StyledToDo />
          <StyledTable>
            <StyledTableHeader>
              <span>Name</span> <span>Value</span>
            </StyledTableHeader>
            <StyledTableLine>
              <span>Waist</span>
              <span>{waist}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Neck Size</span>
              <span>{neckSize}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Hips Size</span>
              <span>{hipsSize}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Femoral Size</span>
              <span>{femoralSize}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Calf</span>
              <span>{calf}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Bust Size</span>
              <span>{bustSize}cm</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Body Weight</span>
              <span>{bodyWeight}kg</span>
            </StyledTableLine>
            <StyledTableLine>
              <span>Arm Size</span>
              <span>{armSize}cm</span>
            </StyledTableLine>
          </StyledTable>
          <StyledLink to="/bodySizeList">
            <Button>Go Back</Button>
          </StyledLink>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token }) => ({
  userId,
  token,
});
export default connect(mapStateToProps)(BodySizeDetails);
