import dayReducer from './dayReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  day: dayReducer,
  auth: authReducer,
});

export default rootReducer;
