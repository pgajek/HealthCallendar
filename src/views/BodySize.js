import React, { Component } from 'react';
import styled from 'styled-components';
import FormTemplate from 'templates/FormTemplate.js';
import Field from 'components/atoms/Field/Field.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
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

  handleInputChange = e => {
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
    fetch('http://164.132.97.42:8080/HealthCalendar/api/body', {
      method: 'POST',
      body: JSON.stringify(bodySizeObj),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => {
        this.setState(prevState => ({
          ...prevState,
          haveSent: true,
        }));
      })
      .catch(err => console.log(err));
  };
  handleYesButtonClick = () => {
    this.handleDataPost();
  };
  componentDidMount() {
    this.createDate();
  }
  createDate = () => {
    const date = new Date();
    let month = 0;
    if (date.getMonth() < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth() + 1;
    }
    const theDate = `${date.getFullYear()}-${month}-${date.getDate()}`;
    this.setState(prevState => ({
      ...prevState,
      date: theDate,
    }));
  };
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
      <StyledWrapper>
        <FormTemplate
          header="Body Size"
          yesClick={this.handleYesButtonClick}
          wrongClick={this.hadnleLogIn}
        >
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
          <Field name="calf" label="Calf" unit="cm" change={this.handleInputChange} value={calf} />
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
        </FormTemplate>
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ userId, token }) => ({
  userId,
  token,
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(BodySize);
