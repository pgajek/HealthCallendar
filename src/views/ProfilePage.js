import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import Field from 'components/atoms/Field/Field';
import Plate from 'components/atoms/Plate/Plate';
import MainTemplate from 'templates/MainTemplate.js';

const StyledWrapper = styled.div`
  margin-top: 50px;
`;
const StyledForm = styled.form``;
const StyledList = styled.div``;

class ProfilePage extends Component {
  state = {
    drinkDemand: '',
    kcalDemand: '',
    email: '',
    nickname: '',
    password: '',
    password2: '',
    number: '',
    birthDate: '',
    edit: false,
    changePassword: false,
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.downloadUserData();
  }
  downloadUserData = () => {
    const { loginName } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8080/health-calendar/api/user/login-name/${loginName}`, {
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
          drinkDemand: data.drinkDemandPerDay,
          kcalDemand: data.kcalDemandPerDay,
          email: data.email,
          nickname: data.nick,
          number: data.phoneNumber,
          birthDate: data.birthDate ? data.birthDate : '',
        });
      })
      .catch(err => console.log(err));
  };
  handleButtonClick = () => {
    if (this.state.edit) {
      this.sendUserParameters();
      this.setState({
        ...this.state,
        edit: !this.state.edit,
      });
    } else {
      this.setState({
        ...this.state,
        edit: !this.state.edit,
      });
    }
  };
  sendUserParameters = () => {
    const { drinkDemand, kcalDemand, email, nickname, number, birthDate } = this.state;
    const limits = {
      birthDate,
      drinkDemandPerDay: drinkDemand,
      email: email,
      kcalDemandPerDay: kcalDemand,
      loginName: this.props.loginName,
      phoneNumber: number,
      nick: nickname,
      id: this.props.userId,
    };

    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));

    fetch(`https://164.132.97.42:8080/health-calendar/api/user/${this.props.userId}`, {
      method: 'PUT',
      body: JSON.stringify(limits),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log('dzialam');
        console.log(data);
      })
      .catch(err => console.log(err));
  };
  handlePasswordButtonClick = () => {
    const { changePassword, password, password2 } = this.state;
    if (changePassword) {
      if (password === password2) {
        this.changePassword();
        this.setState({
          ...this.state,
          changePassword: !changePassword,
        });
      } else alert('Paswords doesnt match');
    } else {
      this.setState({
        ...this.state,
        changePassword: !changePassword,
      });
    }
  };
  changePassword = () => {
    const { loginName, userId, token } = this.props;
    const pass = {
      loginName,
      password: this.state.password,
    };
    const theToken = JSON.parse(JSON.stringify(`Bearer ${token}`));
    fetch(`https://164.132.97.42:8080/health-calendar/api/user/secret/${userId}`, {
      method: 'Put',
      body: JSON.stringify(pass),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${theToken}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };
  render() {
    const {
      drinkDemand,
      kcalDemand,
      email,
      nickname,
      password,
      password2,
      number,
      birthDate,
      edit,
      changePassword,
    } = this.state;
    return (
      <MainTemplate>
        <StyledWrapper>
          {edit ? (
            <StyledForm>
              <Field
                name="drinkDemand"
                value={drinkDemand}
                change={e => this.handleInputChange(e)}
                label="Drink Demand Per Day"
                unit="ml"
              />
              <Field
                name="kcalDemand"
                value={kcalDemand}
                change={e => this.handleInputChange(e)}
                label="Kcal Demand Per Day"
                unit="kcal"
              />
              <Field
                name="email"
                value={email}
                change={e => this.handleInputChange(e)}
                label="E-mail"
                placeholder="adress"
              />
              <Field
                name="nickname"
                value={nickname}
                change={e => this.handleInputChange(e)}
                label="Nickname"
                placeholder="name"
              />
              <Field
                name="number"
                value={number}
                change={e => this.handleInputChange(e)}
                label="Phone Number"
                placeholder="000-000-000"
              />
              <Field
                name="birthDate"
                value={birthDate}
                change={e => this.handleInputChange(e)}
                label="Birth Date"
                type="date"
              />
            </StyledForm>
          ) : (
            <StyledList>
              <Plate name="Drink demand" value={drinkDemand} />
              <Plate name="Kcal demand" value={kcalDemand} />
              <Plate name="E-mail adress" value={email} />
              <Plate name="Birth date" value={birthDate} />
              <Plate name="Number" value={number} />
              <Plate name="Nickname" value={nickname} />
            </StyledList>
          )}
          <Button onClick={this.handleButtonClick}>{edit ? 'Save' : 'Edit'}</Button>
          {changePassword ? (
            <StyledForm>
              <Field
                name="password"
                value={password}
                change={e => this.handleInputChange(e)}
                label="Password"
              />
              <Field
                name="password2"
                value={password2}
                change={e => this.handleInputChange(e)}
                label="Repeat password"
              />
            </StyledForm>
          ) : null}
          <Button onClick={this.handlePasswordButtonClick}>
            {changePassword ? 'Save password' : 'Change password'}
          </Button>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ token, userId, loginName }) => ({
  token,
  userId,
  loginName,
});
export default connect(mapStateToProps)(ProfilePage);
