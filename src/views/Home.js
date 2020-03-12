import React, { Component } from 'react';
import Count from 'components/molecules/Count/Count';
import MainTemplate from 'templates/MainTemplate.js';
import { connect } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import { createDate } from 'helpers';

class Home extends Component {
  state = {
    portionsSnack: 0,
    portionsDrink: 0,
    portionsAlcohol: 0,
  };
  componentDidMount() {
    this.getDayData();
    this.downloadUserData();
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
  downloadUserData = () => {
    const { userId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/report/${createDate()}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          ...this.state,
          portionsAlcohol: data.portionsAlcohol,
          portionsDrink: data.portionsDrink,
          portionsSnack: data.portionsSnack,
        });
      })
      .catch(err => console.log(err));
  };
  updateUserData = () => {
    const { userId, dayId } = this.props;
    const { portionsDrink, portionsAlcohol, portionsSnack } = this.state;
    const userData = {
      date: createDate(),
      portionsAlcohol,
      portionsDrink,
      portionsSnack,
      userId: parseInt(userId),
    };

    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`http://164.132.97.42:8080/health-calendar/api/day/${dayId}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(this.downloadUserData())
      .catch(err => console.log(err));
  };
  handleCount = (aspect, type) => {
    if (this.state[aspect] > -1 && this.state[aspect] < 8) {
      if (type === '+') {
        console.log('counting');
        this.setState(prevState => ({
          ...prevState,
          [aspect]: this.state[aspect] + 1,
        }));
      } else if (this.state[aspect] > 0) {
        console.log('counting');
        this.setState(prevState => ({
          ...prevState,
          [aspect]: this.state[aspect] - 1,
        }));
      }
    }
  };

  render() {
    const { portionsSnack, portionsDrink, portionsAlcohol } = this.state;
    return (
      <MainTemplate>
        <Count
          aspect="portionsDrink"
          howMany={8}
          count={portionsDrink}
          click={this.handleCount}
          sendData={this.updateUserData}
        />
        <Count
          aspect="portionsAlcohol"
          howMany={4}
          count={portionsAlcohol}
          click={this.handleCount}
          sendData={this.updateUserData}
        />
        <Count
          aspect="portionsSnack"
          howMany={4}
          count={portionsSnack}
          click={this.handleCount}
          sendData={this.updateUserData}
        />
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ userId, token, loginName, dayId }) => ({
  userId,
  token,
  loginName,
  dayId,
});
export default connect(mapStateToProps)(Home);
