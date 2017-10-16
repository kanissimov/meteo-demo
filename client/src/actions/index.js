import axios from 'axios';
import { FETCH_USER, FETCH_WEATHER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchWeather = q => async dispatch => {
  const request = await axios.post('/api/fetch_weather', { q });

  dispatch({ type: FETCH_WEATHER, payload: request.data });
};
