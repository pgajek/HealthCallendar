const initialState = {
  dayId: window.localStorage.getItem('dayId'),
};

const dayReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DAY_ID':
      return {
        ...state,
        dayId: action.payload.dayId,
      };
    default:
      return state;
  }
};

export default dayReducer;
