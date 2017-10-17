import { combineReducers } from 'redux';
import auth from './auth';
import cities from './cities';
import selectedCity from './selectedCity';

export default combineReducers({
  auth,
  cities,
  selectedCity
});
