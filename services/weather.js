const axios = require('axios');
const keys = require('../config/keys');
const weatherData = require('./weatherData');

const getForecast = async ({ q, id }) => {
  const prefix = 'http://api.openweathermap.org/data/2.5/forecast';
  const query = id ? `&id=${id}` : `&q=${q}`;
  const url = `${prefix}?appid=${keys.openWeatherMapKey}${query}`;
  const request = await axios.get(url);
  return request.data;
};

const getCurrent = async id => {
  const prefix = 'http://api.openweathermap.org/data/2.5/weather';
  const url = `${prefix}?appid=${keys.openWeatherMapKey}&id=${id}`;
  const request = await axios.get(url);
  return request.data;
};

const getInfo = async ({ q, id: cityId }) => {
  const forecastData = await getForecast({ q, id: cityId });
  const currentData = await getCurrent(forecastData.city.id);
  return weatherData(currentData, forecastData);
};

module.exports = { getCurrent, getCurrent, getInfo };
