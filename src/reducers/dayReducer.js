const dayReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DAY_ID':
      return {
        ...state,
        dayId: action.payload.dayId,
      };
    case 'POST_NEW_DAY':
      return {
        ...state,
        dayId: action.payload.id,
      };
    default:
      return state;
  }
};

export default dayReducer;
