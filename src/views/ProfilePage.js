import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import Field from 'components/atoms/Field/Field';
import Plate from 'components/atoms/Plate/Plate';
import MainTemplate from 'templates/MainTemplate.js';
import { theme } from 'theme/mainTheme.js';
import { ReactComponent as Girl } from 'assets/Graphics/girlOnPhone.svg';

const StyledWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 80vh;
  padding: 2vh 0 30vmax 0;

  background-color: ${theme.mainGreen};
  overflow: hidden;
  @media (orientation: landscape) and (min-width: 1024px) {
    min-height: 90vh;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    padding: 2vh 30vw 2vh 0;
  }
`;
const StyledHeader = styled.h2`
  font-size: ${theme.fontSize.xl};
  color: #fff;
  font-weight: bold;
  text-shadow: 0px 1px 2px #000;
  width: 90%;
  margin: 0 auto;
  @media (orientation: portrait) and (min-width: 768px) {
    font-size: ${theme.fontSize.xxl};
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    width: 60%;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  padding: 2vh;
  margin: 0 auto;
  width: 90%;
  min-height: ${({ pass }) => (pass ? '10vh' : '60vh')};
  background-color: #f2f2f2;
  @media (orientation: landscape) and (min-width: 1280px) {
    width: 60%;
  }
`;
const StyledGirl = styled(Girl)`
  position: absolute;
  bottom: -6.5vmax;
  right: 0;

  width: 30vmax;
  height: 30vmax;
`;
const StyledButton = styled(Button)`
  align-self: flex-end;
  margin: 10px 0 0 0;
`;
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
  handleInputChange = (e) => {
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
    fetch(`https://164.132.97.42:8443/health-calendar/api/user/login-name/${loginName}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
      .catch((err) => console.log(err));
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
        changePassword: false,
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

    fetch(`https://164.132.97.42:8443/health-calendar/api/user/${this.props.userId}`, {
      method: 'PUT',
      body: JSON.stringify(limits),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
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
    fetch(`https://164.132.97.42:8443/health-calendar/api/user/secret/${userId}`, {
      method: 'Put',
      body: JSON.stringify(pass),
      headers: {
        'Content-type': 'application/json',
        Authorization: `${theToken}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
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
          <StyledHeader>{nickname}</StyledHeader>
          {edit ? (
            <StyledForm>
              <Field
                name="nickname"
                value={nickname}
                change={(e) => this.handleInputChange(e)}
                label="Nickname"
                placeholder="name"
              />
              <Field
                name="email"
                value={email}
                change={(e) => this.handleInputChange(e)}
                label="E-mail"
                placeholder="adress"
              />
              <Field
                name="drinkDemand"
                value={drinkDemand}
                change={(e) => this.handleInputChange(e)}
                label="Drink Demand"
                unit="ml"
              />
              <Field
                name="kcalDemand"
                value={kcalDemand}
                change={(e) => this.handleInputChange(e)}
                label="Kcal Demand"
                unit="kcal"
              />
              <Field
                name="number"
                value={number}
                change={(e) => this.handleInputChange(e)}
                label="Phone Number"
                placeholder="000-000-000"
              />
              <Field
                name="birthDate"
                value={birthDate}
                change={(e) => this.handleInputChange(e)}
                label="Birth Date"
                type="date"
              />
              <Button onClick={this.handleButtonClick}>Save</Button>
            </StyledForm>
          ) : (
            <StyledForm as="div">
              <Plate name="Nickname" value={nickname} />
              <Plate name="E-mail adress" value={email} />
              <Plate name="Drink demand(ml)" value={drinkDemand} />
              <Plate name="Kcal demand" value={kcalDemand} />
              <Plate name="Number" value={number} />
              <Plate name="Birth date" value={birthDate} />
              <StyledButton onClick={this.handleButtonClick}>Edit</StyledButton>
              <StyledButton onClick={this.handlePasswordButtonClick}>
                {changePassword ? 'Save password' : 'Change password'}
              </StyledButton>
            </StyledForm>
          )}
          {changePassword ? (
            <StyledForm pass>
              <Field
                name="password"
                value={password}
                change={(e) => this.handleInputChange(e)}
                label="Password"
              />
              <Field
                name="password2"
                value={password2}
                change={(e) => this.handleInputChange(e)}
                label="Repeat password"
              />
            </StyledForm>
          ) : null}
          <StyledGirl />
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ auth: { token, userId, loginName } }) => ({
  token,
  userId,
  loginName,
});
export default connect(mapStateToProps)(ProfilePage);
