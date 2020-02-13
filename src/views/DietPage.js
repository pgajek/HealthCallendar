import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from 'theme/mainTheme.js';
import AddNew from 'components/molecules/AddNew/AddNew.js';
import MainTemplate from 'templates/MainTemplate.js';
import FormTemplate from 'templates/FormTemplate.js';
import Card from 'components/atoms/Card/Card.js';

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
    Meal: '',
    Calories: '',
    meals: [],
  };
  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  habndleYesButtonClick = e => {
    e.preventDefault();
    const Meal = {
      name: this.state.Meal,
      value: this.state.Calories,
    };
    this.setState({
      ...this.state,
      Meal: '',
      Calories: '',
      meals: [...this.state.meals, Meal],
    });
  };
  render() {
    const MappedMeals = this.state.meals.map((meal, index) => (
      <Card key={index} name={meal.name} value={meal.value} />
    ));
    return (
      <MainTemplate>
        <FormTemplate header="Diet Page">
          <StyledWrapper>
            {MappedMeals}
            <AddNew
              change={this.handleInputChange}
              name="Meal"
              name2="Calories"
              click={this.habndleYesButtonClick}
              value={this.state.Meal}
              value2={this.state.Calories}
            />
          </StyledWrapper>
        </FormTemplate>
      </MainTemplate>
    );
  }
}

export default DietPage;
