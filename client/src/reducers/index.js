import { combineReducers } from 'redux';
import auth from './auth';
import cities from './cities';
import selected from './selected';

export default combineReducers({
  auth,
  cities,
  selected
});
