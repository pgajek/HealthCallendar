import React, { Component } from 'react';
import styled from 'styled-components';
import Count from 'components/molecules/Count/Count';
import MainTemplate from 'templates/MainTemplate.js';
import { connect } from 'react-redux';
import Controler from 'components/molecules/Controler/Controler';
import { getDayId as getDayIdAction, createNewDay as createNewDayAction } from 'actions/index.js';
import { createDate } from 'helpers';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ReactComponent as GirlRun } from 'assets/Graphics/girl_run.svg';
import { theme } from 'theme/mainTheme.js';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;

  @media (orientation: landscape) {
    min-height: 90vh;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (orientation: landscape) and(min-width: 1280px) {
    grid-template-columns: 70vw 30vw;
  }
`;

const StyledGreenWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  height: 90vh;
  padding-top: 25%;

  background-color: ${theme.mainGreen};
  & > * {
    z-index: 10;
    margin: 20px 0;
  }
  @media (orientation: landscape) {
    width: 50vw;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 50vw;
    height: 100%;
  }
  @media (orientation: landscape) and (min-width: 1280px) {
    width: 60vw;
    height: 100%;
    padding-bottom: 30px;
  }
`;
const StyledHeader = styled.h1`
  position: absolute;
  top: 0;
  left: 0;

  height: 15%;
  width: 100%;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #86d176;
`;
const StyledWhiteWrapper = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  min-height: 90vh;
  padding-bottom: 5vh;

  & > * {
    margin: 10px 0;
  }

  @media (orientation: landscape) {
    width: 50vw;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 50vw;
    height: 100%;
  }
  @media (min-width: 1280px) {
    width: 40vw;
    height: 100%;
  }
`;
const StyledGirl = styled(GirlRun)`
  width: 20vmax;
  height: 20vmax;

  @media (min-width: 1024px) {
    width: 15vmax;
    height: 15vmax;
    justify-self: flex-start;
  }
`;
const StyledNickname = styled.span`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 670px;
  font-size: ${theme.fontSize.m};
  color: #f0f0f0;
  font-weight: bold;
  text-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.4);
  @media (min-width: 768px) {
    font-size: ${theme.fontSize.xxl};
  }
`;
class Home extends Component {
  state = {
    portionsSnack: 0,
    portionsDrink: 0,
    portionsAlcohol: 0,
  };
  componentDidMount() {
    if (!this.props.dayId) this.getDayData();
    else this.downloadUserData();
  }
  postDay = (day) => {
    const { userId, token, createNewDay } = this.props;
    createNewDay(userId, token, createDate(), day);
  };
  getDayData = () => {
    const { getDayId, userId, token } = this.props;
    getDayId(userId, token, createDate());
  };
  downloadUserData = () => {
    const { userId } = this.props;
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/report/long/${createDate()}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const {
          lastDateMeasureBody,
          portionsSnack,
          portionsDrink,
          portionsAlcohol,
          dailyDiet: { listMeals, sumOfKcal },
          trainings: { listTrainings },
          nick,
        } = data;
        const LastMeal = listMeals[listMeals.length - 1];
        const LastTraining = listTrainings[listTrainings.length - 1];

        this.setState({
          ...this.state,
          portionsAlcohol: portionsAlcohol,
          portionsDrink: portionsDrink,
          portionsSnack: portionsSnack,
          lastBodyMeasurement: lastDateMeasureBody,
          lastMeal: LastMeal,
          lastTraining: LastTraining,
          nickname: nick,
          sumOfKcal,
        });
      })
      .catch((err) => console.log(err));
  };
  downloadBasicData = () => {
    const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
    fetch(`https://164.132.97.42:8443/health-calendar/api/report/basic/${this.props.loginName}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.setUserID(data.userId);
        this.setState({
          ...this.state,
          lastBodyMeasurement: data.lastDateMeasureBody,
          nickname: data.nick,
        });
      });
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
    if (dayId) {
      const token = JSON.parse(JSON.stringify(`Bearer ${this.props.token}`));
      fetch(`https://164.132.97.42:8443/health-calendar/api/day/${dayId}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json',
          Authorization: `${token}`,
        },
      }).then((res) => {
        if (res.ok) {
          this.downloadUserData();
        }
      });
    } else {
      this.postDay(userData);
    }
  };
  handleCount = (aspect, type) => {
    if (this.state[aspect] > -1 && this.state[aspect] < 8) {
      if (type === '+') {
        this.setState(
          (prevState) => ({
            ...prevState,
            [aspect]: this.state[aspect] + 1,
          }),
          this.updateUserData,
        );
      } else if (this.state[aspect] > 0) {
        this.setState(
          (prevState) => ({
            ...prevState,
            [aspect]: this.state[aspect] - 1,
          }),
          this.updateUserData,
        );
      }
    }
  };
  checkMeasurementDate(apiString) {
    const reg = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (reg.test(apiString)) {
      return apiString;
    } else return 'None yet';
  }
  render() {
    const {
      portionsSnack,
      portionsDrink,
      portionsAlcohol,
      lastBodyMeasurement,
      lastMeal,
      lastTraining,
      nickname,
      sumOfKcal,
    } = this.state;
    const LastMealTime = lastMeal && lastMeal.dateTimeOfEat.slice(11);
    const TrainingTime = lastTraining && lastTraining.dateTimeOfExecution.slice(11);
    return (
      <MainTemplate>
        <StyledWrapper>
          <StyledGreenWrapper>
            <StyledHeader>
              <Logo />
            </StyledHeader>
            <StyledNickname>{`${nickname} - ${createDate()}`}</StyledNickname>
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
          </StyledGreenWrapper>
          <StyledWhiteWrapper>
            <StyledGirl />
            <Controler label="Last body measurement" link="/bodySize">
              <span>
                {lastBodyMeasurement
                  ? this.checkMeasurementDate(lastBodyMeasurement)
                  : 'No measurements yet'}
              </span>
            </Controler>
            <Controler label="Last training" link="/training">
              {lastTraining ? (
                <>
                  <span>{lastTraining.description} </span> | <span>{TrainingTime}</span>
                </>
              ) : (
                <span>You haven't train today</span>
              )}
            </Controler>
            <Controler label={`Last meal -  Kcal : ${sumOfKcal ? sumOfKcal : 0} `} link="/dietPage">
              {lastMeal ? (
                <>
                  <span>{lastMeal.description}</span> |<span>{lastMeal.kcal}kcal</span> |
                  <span>{LastMealTime}</span>
                </>
              ) : (
                <span>You haven't eat today</span>
              )}
            </Controler>
          </StyledWhiteWrapper>
        </StyledWrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = ({ auth: { userId, token, loginName }, day: { dayId } }) => ({
  userId,
  token,
  loginName,
  dayId,
});
const mapDispatchToProps = (dispatch) => ({
  getDayId: (userId, apiToken, date) => {
    dispatch(getDayIdAction(userId, apiToken, date));
  },
  createNewDay: (userId, token, date, day) =>
    dispatch(createNewDayAction(userId, token, date, day)),
  setUserID: (userId) => dispatch({ type: 'SET_USER_ID', payload: { userId } }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
