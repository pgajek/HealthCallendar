export const authenticate = (user) => (dispatch) => {
  return fetch('https://164.132.97.42:8443/health-calendar/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
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
