import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import AddNew from 'components/molecules/AddNew/AddNew.js';
import MainTemplate from 'templates/MainTemplate.js';
import FormTemplate from 'templates/FormTemplate.js';
import Card from 'components/atoms/Card/Card.js';
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

class DietPage extends Component {
  state = {
    meal: '',
    calories: '',
    meals: [],
  };
  componentDidMount() {
    this.getUserData();
  }
  getUserData = () => {
    const { userId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(
      `http://164.132.97.42:8080/health-calendar/api/meal/dto/date/user-id/${this.createDate()}/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `${token}`,
        },
      },
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          meals: data.listMeals,
        });
      })
      .catch(err => console.log(err));
  };
  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  sendMeal = Meal => {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/meal`, {
      method: 'POST',
      body: JSON.stringify(Meal),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => this.getUserData())
      .catch(err => console.log(err));
  };
  habndleYesButtonClick = e => {
    e.preventDefault();
    const NewMeal = {
      dateTimeOfEat: `${this.createDate()}_${this.createHour()}`,
      dayId: this.props.dayId,
      description: this.state.meal,
      kcal: this.state.calories,
    };
    this.sendMeal(NewMeal);
    this.setState({
      ...this.state,
      meal: '',
      calories: '',
    });
  };
  handleDeleteButtonClick = (e, id) => {
    e.preventDefault();
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/meal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => this.getUserData())
      .catch(err => console.log(err));
  };
  createDate = () => {
    const date = new Date();
    let month = 0;
    let day = 0;
    if (date.getMonth() < 10) {
      month = `0${date.getMonth() + 1}`;
    } else {
      month = date.getMonth() + 1;
    }
    if (date.getDate() < 10) {
      day = `0${date.getDay() + 1}`;
    } else {
      day = date.getDate() + 1;
    }
    const theDate = `${date.getFullYear()}-${month}-${day}`;
    return theDate;
  };
  createHour = () => {
    const date = new Date();
    let Hour;
    let Minutes;
    if (date.getHours() < 10) {
      Hour = `0${date.getHours()}`;
    } else {
      Hour = date.getHours();
    }
    if (date.getMinutes() < 10) {
      Minutes = `0${date.getMinutes()}`;
    } else {
      Minutes = date.getMinutes();
    }
    const theHour = `${Hour}:${Minutes}`;
    return theHour;
  };
  render() {
    const MappedMeals = this.state.meals.map(meal => (
      <Card
        key={meal.id}
        id={meal.id}
        click={this.handleDeleteButtonClick}
        name={meal.description}
        value={meal.kcal}
      />
    ));
    return (
      <MainTemplate>
        <FormTemplate header="Diet Page" yesClick={this.habndleYesButtonClick}>
          <StyledWrapper>
            {MappedMeals}
            <AddNew
              change={this.handleInputChange}
              name="meal"
              name2="calories"
              value={this.state.meal}
              value2={this.state.calories}
            />
          </StyledWrapper>
        </FormTemplate>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token, dayId }) => ({
  userId,
  token,
  dayId,
});
export default connect(mapStateToProps)(DietPage);
