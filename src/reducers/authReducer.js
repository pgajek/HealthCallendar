const initialState = {
  token: window.localStorage.getItem('token'),
  userId: window.localStorage.getItem('userId'),
  loginName: window.localStorage.getItem('loginName'),
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userId: action.paload.userId,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        loginName: action.payload.login,
        isLoggedIn: true,
      };
    case 'FAKE_AUTH_SUCCESS':
      return {
        isLoggedIn: true,
        userId: 9999999,
        token: 'jfhdsfhdsihwiufhesoht75y9turehfre95th9ure',
      };
    case 'AUTH_FAILURE':
      return state;
    case 'USER_LOGOUT':
      return {
        userId: null,
        token: null,
        loginName: null,
        dayId: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
