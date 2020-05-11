const initialState = {
  token: window.localStorage.getItem('token'),
  userId: window.localStorage.getItem('userId'),
  loginName: window.localStorage.getItem('loginName'),
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        loginName: action.payload.login,
        isLoggedIn: true,
      };
    case 'AUTH_FAILURE':
      return state;
    case 'USER_LOGOUT':
      return {};
    default:
      return state;
  }
};

export default authReducer;
