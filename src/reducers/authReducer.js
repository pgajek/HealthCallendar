const initialState = {
  token: window.sessionStorage.getItem('token'),
  userId: window.sessionStorage.getItem('userId'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
      };
    case 'AUTH_FAILURE':
      return state;
    case 'USER_LOGOUT':
      return {
        ...state,
        userId: '',
        token: '',
      };
    default:
      return state;
  }
};

export default authReducer;
