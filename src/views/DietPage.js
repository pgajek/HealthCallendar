import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import AddNew from 'components/molecules/AddNew/AddNew.js';
import MainTemplate from 'templates/MainTemplate.js';
import Card from 'components/atoms/Card/Card.js';
import { connect } from 'react-redux';
import { createDate, createHour } from 'helpers';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'addNew'
    'wrapper';
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr;

  justify-items: center;
  align-items: center;

  width: 100%;
  min-height: 80vh;

  padding-bottom: 5vh;
  @media (min-width: 768px) {
    grid-template-rows: 220px 1fr;
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

class DietPage extends Component {
  state = {
    meal: '',
    calories: '',
    mealType: '',
    meals: [],
  };
  componentDidMount() {
    this.getUserData();
  }
  getUserData = () => {
    const { userId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(
      `https://164.132.97.42:8443/health-calendar/api/meal/dto/date/user-id/${createDate()}/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: `${token}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ...this.state,
          meals: data.listMeals,
        });
      })
      .catch((err) => console.log(err));
  };
  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  sendMeal = (Meal) => {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/meal`, {
      method: 'POST',
      body: JSON.stringify(Meal),
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
    const NewMeal = {
      dateTimeOfEat: `${createDate()}_${createHour()}`,
      dayId: this.props.dayId,
      description: this.state.meal,
      kcal: this.state.calories,
      type: this.state.mealType,
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
    fetch(`https://164.132.97.42:8443/health-calendar/api/meal/${id}`, {
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
    const MappedMeals = this.state.meals.map((meal) => (
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
        <StyledWrapper>
          <AddNew
            change={this.handleInputChange}
            name="meal"
            name2="calories"
            value={this.state.meal}
            value2={this.state.calories}
            click={this.habndleYesButtonClick}
            meal="mealType"
            mealValue={this.state.mealType}
          />
          <StyledMealsWrapper> {MappedMeals}</StyledMealsWrapper>
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
export default connect(mapStateToProps)(DietPage);
