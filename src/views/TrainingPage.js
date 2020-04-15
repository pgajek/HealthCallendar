import React, { Component } from 'react';
import styled from 'styled-components';
import AddNew from 'components/molecules/AddNew/AddNew.js';
import Card from 'components/atoms/Card/Card.js';
import { connect } from 'react-redux';
import { createDate, createHour } from 'helpers';
import MainTemplate from 'templates/MainTemplate.js';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'addNew'
    'wrapper';
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;

  justify-items: center;
  align-items: center;

  width: 100%;
  min-height: 80vh;

  padding-bottom: 5vh;
  @media (min-width: 768px) {
    grid-template-rows: 200px 1fr;
  }
`;
const StyledMealsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-template-rows: repeat(auto-fill, 80px);
  grid-gap: 10px;
  grid-area: wrapper;

  width: 80%;
  height: 100%;

  justify-content: center;
  justify-items: center;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 220px);
    grid-template-rows: repeat(auto-fill, 180px);
    grid-gap: 20px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, 300px);
  }
`;

class TrainingPage extends Component {
  state = {
    training: '',
    calories: '',
    trainings: [],
  };
  componentDidMount() {
    this.getUserData();
  }
  getUserData = () => {
    const { dayId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/training/trainings-summary/${dayId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.listTrainings.length > 0) {
          this.setState({
            ...this.state,
            trainings: data.listTrainings,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  sendTraining = (Training) => {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/training`, {
      method: 'POST',
      body: JSON.stringify(Training),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => this.getUserData())
      .catch((err) => console.log(err));
  };
  habndleYesButtonClick = (e) => {
    e.preventDefault();
    const NewTraining = {
      dateTimeOfExecution: `${createDate()}_${createHour()}`,
      dayId: parseInt(this.props.dayId),
      elapsedTime: '01:20',
      description: this.state.training,
      burnKcal: this.state.calories,
    };
    this.sendTraining(NewTraining);
    this.setState({
      ...this.state,
      training: '',
      calories: '',
    });
  };
  handleDeleteButtonClick = (e, id) => {
    e.preventDefault();
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/training/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => this.getUserData())
      .catch((err) => console.log(err));
  };
  render() {
    const MappedTrainings = this.state.trainings.map((training) => (
      <Card
        key={training.id}
        id={training.id}
        click={this.handleDeleteButtonClick}
        name={training.description}
        value={training.burnKcal}
      />
    ));
    return (
      <MainTemplate>
        <StyledWrapper>
          <AddNew
            change={this.handleInputChange}
            name="training"
            name2="calories"
            value={this.state.training}
            value2={this.state.calories}
            click={this.habndleYesButtonClick}
          />
          <StyledMealsWrapper> {MappedTrainings}</StyledMealsWrapper>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token, dayId }) => ({
  userId,
  token,
  dayId,
});
export default connect(mapStateToProps)(TrainingPage);
