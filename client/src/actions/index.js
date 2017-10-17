import axios from 'axios';
import toastr from 'toastr';
import {
  FETCH_CITY,
  REMOVE_CITY,
  SELECT_CITY,
  CONTEXT_SAVED,
  FETCH_CONTEXT
} from './types';

export const fetchContext = () => async dispatch => {
  const request = await axios.get('/api/fetch_context');
  dispatch({ type: FETCH_CONTEXT, payload: request.data });
};

export const saveContext = data => async dispatch => {
  await axios.post('/api/save_context', data);
  toastr.success('Updated');
  dispatch({ type: CONTEXT_SAVED, payload: null });
};

export const fetchCity = ({ q, id }) => async dispatch => {
  const request = await axios.post('/api/fetch_city', { q, id });
  dispatch({ type: FETCH_CITY, payload: request.data });
  return request.data.city ? request.data.city.id : null;
};

export const removeCity = id => ({ type: REMOVE_CITY, payload: id });

export const selectCity = id => ({ type: SELECT_CITY, payload: id });
