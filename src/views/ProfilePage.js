import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';

class ProfilePage extends Component {
  state = {};
  componentDidMount() {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));

    fetch(`http://164.132.97.42:8080/HealthCalendar/api/user/login-name/${'999999'}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  sendUserParameters = () => {
    const limits = {
      birthDate: '2000-02-20',
      drinkDemandPerDay: 3200,
      email: '999999@gmail.com',
      kcalDemandPerDay: 22,
      loginName: '999999',
      nick: '999999',
      phoneNumber: 543908654,
      sex: 1,
    };

    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));

    fetch(`http://164.132.97.42:8080/HealthCalendar/api/user/${this.props.userId}`, {
      method: 'PUT',
      body: JSON.stringify(limits),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => console.log(`data: ${data}, pobrało sie`))
      .catch(err => console.log(err));
  };
  render() {
    return <Button onClick={this.sendUserParameters}>Dodaj</Button>;
  }
}
const mapStateToProps = ({ token, userId }) => ({
  token,
  userId,
});
export default connect(mapStateToProps)(ProfilePage);
