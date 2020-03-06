import React, { Component } from 'react';
import Count from 'components/molecules/Count/Count';
import MainTemplate from 'templates/MainTemplate.js';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { createDate } from 'helpers';

class Home extends Component {
  state = {
    snacks: 0,
    drinks: 0,
    alcohols: 0,
  };
  componentDidMount() {
    this.getDayData();
  }
  postDay = () => {
    const day = {
      date: createDate(),
      portionsAlcohol: 0,
      portionsDrink: 0,
      portionsSnack: 0,
      userId: this.props.userId,
    };
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/day`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(day),
    })
      .then(res => {
        this.getDayData();
      })
      .catch(err => console.log(err));
  };
  getDayData = () => {
    const { userId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/day/day-id/${createDate()}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          this.postDay();
        }
      })
      .then(dayId => {
        window.sessionStorage.setItem('dayId', dayId);
        this.setState(prevState => ({ ...prevState, dayId }));
      })
      .catch(err => console.log(err));
  };
  deleteDay = () => {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/day/14`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  handleCount = (count, aspect) => {
    this.setState(prevState => ({
      ...prevState,
      [aspect]: count,
    }));
  };

  render() {
    const { snacks, drinks, alcohols } = this.state;
    return (
      <MainTemplate>
        <Count aspect="drinks" howMany={8} count={drinks} click={this.handleCount} />
        <Count aspect="alcohols" howMany={4} count={alcohols} click={this.handleCount} />
        <Count aspect="snacks" howMany={4} count={snacks} click={this.handleCount} />
        <Button onClick={this.deleteDay}>Del</Button>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token }) => ({
  userId,
  token,
});
export default connect(mapStateToProps)(Home);
