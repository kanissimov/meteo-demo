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

  dispatch({ type: FETCH_USER, payload: request.data });
};

export const fetchCity = q => async dispatch => {
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
