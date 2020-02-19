import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate.js';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  @media (min-width: 1024px) {
    padding-top: 50px;
  }
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
    console.log(match);
    fetch(`http://164.132.97.42:8080/HealthCalendar/api/body/${match.params.id}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(response => {
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
          <h2>{`Date of measurment: ${dateMeasurement}`}</h2>
          <Paragraph>{`Waist: ${waist} cm`}</Paragraph>
          <Paragraph>{`Neck: ${neckSize} cm`}</Paragraph>
          <Paragraph>{`Hips: ${hipsSize} cm`}</Paragraph>
          <Paragraph>{`Femoral: ${femoralSize} cm`}</Paragraph>
          <Paragraph>{`Calf: ${calf} cm`}</Paragraph>
          <Paragraph>{`Bust: ${bustSize} cm`}</Paragraph>
          <Paragraph>{`Weight: ${bodyWeight} kg`}</Paragraph>
          <Paragraph>{`Arm: ${armSize} cm`}</Paragraph>
          <Link to="/bodySizeList">
            <Button>Go Back</Button>
          </Link>
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
