import React, { Component } from 'react';
import styled from 'styled-components';
import AddNew from 'components/molecules/AddNew/AddNew.js';
import Card from 'components/atoms/Card/Card.js';
import { connect } from 'react-redux';
import { createDate, createHour } from 'helpers';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
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
      <StyledWrapper>
        {MappedTrainings}
        <AddNew
          change={this.handleInputChange}
          name="training"
          name2="calories"
          value={this.state.training}
          value2={this.state.calories}
        />
      </StyledWrapper>
    );
  }
}
const mapStateToProps = ({ userId, token, dayId }) => ({
  userId,
  token,
  dayId,
});
export default connect(mapStateToProps)(TrainingPage);
