import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from 'components/organisms/Nav/Nav';
import SideFlag from 'components/molecules/SideFlag/SideFlag';
import Field from 'components/atoms/Field/Field';
import IconButton from 'components/atoms/IconButton/IconButton';
import yesicon from 'assets/icons/yesicon.svg';
import wrongicon from 'assets/icons/wrongicon.svg';

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

const StyledForm = styled.form`
  min-height: 100vh;
  width: 100vw;
  background-color: #4b4b4b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20vh 0;

  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    height: 85vh;
    width: 80vw;
    border: 5px solid white;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    const token = JSON.parse(
      JSON.stringify(
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRvbSIsInJvbGUiOiJBRE1JTiJ9.CiX5kau56zry9aMZ7Cm0IdGYp5o83TgbPqFufRz9iWY',
      ),
    );

    fetch('http://164.132.97.42:8080/HealthCalendar/api/body/1', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8, ',
        Authorization: `${token}`,
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

    fetch('http://164.132.97.42:8080/HealthCalendar/api/body', {
      method: 'POST',
      body: JSON.stringify(bodySizeObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8, ',
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
        <Nav />
        <SideFlag primarry>Body Size</SideFlag>

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
        </StyledForm>
        <SideFlag secondary>
          <IconButton icon={yesicon} onClick={this.handleYesButtonClick} />
          <IconButton icon={wrongicon} />
        </SideFlag>
      </StyledWrapper>
    );
  }
}
export default BodySize;
