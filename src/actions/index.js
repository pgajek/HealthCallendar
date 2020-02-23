export const authenticate = user => dispatch => {
  return fetch('http://164.132.97.42:8080/health-calendar/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(payload => {
      window.sessionStorage.setItem('token', payload.token);
      window.sessionStorage.setItem('userId', payload.userId);
      dispatch({ type: 'AUTH_SUCCESS', payload });
      console.log(payload);
    })
    .catch(err => {
      console.log(err);
      //   dispatch({ type: 'AUTH_FAILURE' });
    });
};
export const bodySizePost = (bodySize, token) => dispatch => {
  return fetch('http://164.132.97.42:8080/health-calendar/api/body', {
    method: 'POST',
    body: JSON.stringify(bodySize),
    headers: {
      'Content-type': 'application/json',
      Authorization: `${token}`,
    },
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
