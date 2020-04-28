import authReducer from './authReducer';
import dayReducer from './dayReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authReducer,
  dayReducer,
});

export default rootReducer;
