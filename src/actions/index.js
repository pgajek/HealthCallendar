export const authenticate = user => dispatch => {
  return fetch('https://164.132.97.42:8443/health-calendar/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const payload = { login: user.loginName, userId: data.userId, token: data.token };
      window.sessionStorage.setItem('token', payload.token);
      window.sessionStorage.setItem('userId', payload.userId);
      window.sessionStorage.setItem('loginName', payload.login);
      dispatch({ type: 'AUTH_SUCCESS', payload });
    })
    .catch(err => {
      console.log(err);
      //   dispatch({ type: 'AUTH_FAILURE' });
    });
};
