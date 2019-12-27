import React, { Component } from 'react';
import styled from 'styled-components';
import FormTemplate from 'templates/FormTemplate.js';
import Field from 'components/atoms/Field/Field.js';

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
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    const token = JSON.parse(
      JSON.stringify(
        'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJTdWJqZWN0IiwibmFtZSI6ImtyaXMiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE1NzcxNzMzMTMsImV4cCI6MTU3NzQ3MzMxM30.I9UJbWSHl7kL-ESbZ7eQF7BVYHf93E1w6ZaEnlPlKSSHDhT5hNn54earYRktqZRe',
      ),
    );

    fetch('http://164.132.97.42:8080/HealthCalendar/api/body/1', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json;',
        Authorization: `${token}`,
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  handleDataPost = () => {
    const bodySizeObj = {
      armSize: this.state.armSize,
      bodyWeight: this.state.bodyWeight,
      bustSize: this.state.bustSize,
      calf: this.state.calf,
      dataMeasurement: '2019-22-1',
      femoralSize: this.state.femoralSize,
      hipsSize: this.state.hipsSize,
      neckSize: this.state.neckSize,
      userId: 1,
      waist: this.state.waist,
    };
    const token = JSON.parse(
      JSON.stringify(
        'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJTdWJqZWN0IiwibmFtZSI6ImtyaXMiLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJpYXQiOjE1NzcxNzMzMTMsImV4cCI6MTU3NzQ3MzMxM30.I9UJbWSHl7kL-ESbZ7eQF7BVYHf93E1w6ZaEnlPlKSSHDhT5hNn54earYRktqZRe',
      ),
    );
    fetch('http://164.132.97.42:8080/HealthCalendar/api/body', {
      method: 'POST',
      body: JSON.stringify(bodySizeObj),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  handleYesButtonClick = () => {
    this.handleDataPost();
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

    return (
      <StyledWrapper>
        <FormTemplate header="Body Size" yesClick={this.handleYesButtonClick}>
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
export default BodySize;
