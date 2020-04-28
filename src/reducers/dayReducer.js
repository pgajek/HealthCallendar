const dayReducer = (state, action) => {
  switch (action.type) {
    case 'getDayId':
      return {
        ...state,
        dayId: action.payload.dayId,
      };
    default:
      return state;
  }
};

export default dayReducer;
