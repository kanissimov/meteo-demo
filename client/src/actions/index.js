import axios from 'axios';
import toastr from 'toastr';
import {
  FETCH_USER,
  FETCH_CITY,
  REMOVE_CITY,
  SELECT_CITY,
  CONTEXT_SAVED
} from './types';

export const fetchUser = () => async dispatch => {
  const request = await axios.get('/api/current_user');
  const user = request.data;
  dispatch({ type: FETCH_USER, payload: user });
  if (user) {
    user.cities.forEach(async city => {
      const request = await axios.post('/api/fetch_city', {
        id: city.cityId
      });
      dispatch({ type: FETCH_CITY, payload: request.data });
    });
    dispatch({ type: SELECT_CITY, payload: user.selectedCity });
  }
};

export const fetchCity = ({ q }) => async dispatch => {
  const request = await axios.post('/api/fetch_city', { q });

  dispatch({ type: FETCH_CITY, payload: request.data });
};

export const removeCity = id => ({ type: REMOVE_CITY, payload: id });
export const selectCity = id => ({ type: SELECT_CITY, payload: id });

export const saveContext = data => async dispatch => {
  await axios.post('/api/save_context', data);
  toastr.success('Updated');

  dispatch({ type: CONTEXT_SAVED, payload: null });
};
