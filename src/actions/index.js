export const authenticate = (user) => (dispatch) => {
  return fetch('https://164.132.97.42:8443/health-calendar/token', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
    rejectUnauthorized: false,
    requestCert: true,
    agent: false,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      const payload = { login: user.loginName, userId: data.userId, token: data.token };
      window.localStorage.setItem('token', payload.token);
      window.localStorage.setItem('userId', payload.userId);
      window.localStorage.setItem('loginName', payload.login);
      dispatch({ type: 'AUTH_SUCCESS', payload });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDayId = (userId, apiToken, date) => (dispatch) => {
  const token = JSON.parse(JSON.stringify(`Bearer ${apiToken}`));
  fetch(`https://164.132.97.42:8443/health-calendar/api/day/day-id/${date}/${userId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((dayId) => {
      console.log(dayId);
      dispatch({ type: 'GET_DAY_ID', payload: { dayId } });
    })
    .catch((err) => console.log(err));
};

export const createNewDay = (userId, apiToken, date) => (dispatch) => {
  const day = {
    date,
    portionsAlcohol: 0,
    portionsDrink: 0,
    portionsSnack: 0,
    userId,
  };
  const token = JSON.parse(JSON.stringify(`Bearer ${apiToken}`));
  return fetch(`https://164.132.97.42:8443/health-calendar/api/day`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `${token}`,
    },
    body: JSON.stringify(day),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({ type: 'POST_NEW_DAY', payload: data });
    })
    .catch((err) => console.log(err));
};
