const initialState = {
  dayId: window.sessionStorage.getItem('dayId'),
};

const dayReducer = (state = initialState, action) => {
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
        portionsDrink: action.payload.portionsDrink,
        portionsAlcohol: action.payload.portionsAlcohol,
        portionsSnack: action.payload.portionsSnack,
      };
    default:
      return state;
  }
};

export default dayReducer;
