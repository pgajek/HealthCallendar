import authReducer from './authReducer';
import bodySizeReducer from './bodySizeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authReducer,
  bodySizeReducer,
});

export default rootReducer;
