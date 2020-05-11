import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from 'components/atoms/IconButton/IconButton';
import Field from 'components/atoms/Field/Field.js';
import MainTemplate from 'templates/MainTemplate.js';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { createDate } from 'helpers';
import { ReactComponent as YesIcon } from 'assets/icons/yesicon.svg';
import { ReactComponent as WrongIcon } from 'assets/icons/wrongicon.svg';
import { ReactComponent as RunningGuy } from 'assets/Graphics/runningGuy.svg';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 80vh;
  width: 100%;

  @media (orientation: landscape) {
    min-height: 100vh;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    min-height: 80vh;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    min-height: 90vh;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 100%;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding-top: 4vh;
  height: 100%;
  width: 100%;
  padding-bottom: 40vmin;

  @media (orientation: portrait) and (min-width: 768px) {
    padding-bottom: 30vmin;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 8vh auto 0 auto;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    width: 100%;
    max-width: 900px;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    align-content: center;
  }
`;
const StyledImage = styled.div`
  position: absolute;
  bottom: -4vmax;
  left: 0;

  height: 40vmin;
  width: 40vmin;
  & svg {
    height: 100%;
    width: 100%;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    position: static;
    width: 100%;
    height: 100%;
    background-color: ${theme.mainGreen};
  }
`;
const StyledButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 40vmin;
  height: 40vmin;
  margin-right: 10px;
  align-self: flex-end;

  @media (orientation: portrait) and (min-width: 768px) {
    margin-right: 10vmin;
    width: 30vmin;
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    width: 30vmin;
    margin-right: 10vmin;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    width: 30vmin;
    height: 25vmin;
    margin-right: 35vw;
  }
  @media (orientation: landscape) and (min-width: 1440px) {
    max-width: 150px;
  }
`;

class BodySize extends Component {
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
    haveSent: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleDataPost = () => {
    const bodySizeObj = {
      armSize: this.state.armSize,
      bodyWeight: this.state.bodyWeight,
      bustSize: this.state.bustSize,
      calf: this.state.calf,
      dateMeasurement: this.state.date,
      femoralSize: this.state.femoralSize,
      hipsSize: this.state.hipsSize,
      neckSize: this.state.neckSize,
      userId: this.props.userId,
      waist: this.state.waist,
    };
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch('https://164.132.97.42:8443/health-calendar/api/body', {
      method: 'POST',
      body: JSON.stringify(bodySizeObj),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        this.setState((prevState) => ({
          ...prevState,
          haveSent: true,
        }));
      })
      .catch((err) => console.log(err));
  };
  handleYesButtonClick = (e) => {
    e.preventDefault();
    this.handleDataPost();
  };
  componentDidMount() {
    const theDate = createDate();
    this.setState((prevState) => ({
      ...prevState,
      date: theDate,
    }));
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
    } = this.state;
    if (this.state.haveSent) {
      return <Redirect to="/home" />;
    }
    return (
      <MainTemplate>
        <StyledWrapper>
          <StyledForm>
            <Field
              name="armSize"
              label="Arm Size"
              unit="cm"
              change={this.handleInputChange}
              value={armSize}
            />
            <Field
              name="bodyWeight"
              label="Body Weight"
              unit="kg"
              change={this.handleInputChange}
              value={bodyWeight}
            />
            <Field
              name="bustSize"
              label="Bust Size"
              unit="cm"
              change={this.handleInputChange}
              value={bustSize}
            />
            <Field
              name="calf"
              label="Calf"
              unit="cm"
              change={this.handleInputChange}
              value={calf}
            />
            <Field
              name="femoralSize"
              label="Femoral Size"
              unit="cm"
              change={this.handleInputChange}
              value={femoralSize}
            />
            <Field
              name="hipsSize"
              label="Hips Size"
              unit="cm"
              change={this.handleInputChange}
              value={hipsSize}
            />
            <Field
              name="neckSize"
              label="Neck Size"
              unit="cm"
              change={this.handleInputChange}
              value={neckSize}
            />
            <Field
              name="waist"
              label="Waist"
              unit="cm"
              change={this.handleInputChange}
              value={waist}
            />
            <StyledButtonWrapper>
              <IconButton onClick={this.handleYesButtonClick}>
                <YesIcon />
              </IconButton>
              <IconButton>
                <Link to="/home">
                  <WrongIcon />
                </Link>
              </IconButton>
            </StyledButtonWrapper>
          </StyledForm>
          <StyledImage>
            <RunningGuy />{' '}
          </StyledImage>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ auth: { userId, token } }) => ({
  userId,
  token,
});

export default connect(mapStateToProps)(BodySize);
