export const authenticate = user => dispatch => {
  return fetch('http://164.132.97.42:8080/HealthCalendar/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(payload => {
      console.log(payload);
      window.sessionStorage.setItem('token', payload.token);
      window.sessionStorage.setItem('userId', payload.userId);
      dispatch({ type: 'AUTH_SUCCESS', payload });
    })
    .catch(err => {
      console.log(err);
      //   dispatch({ type: 'AUTH_FAILURE' });
    });
};
