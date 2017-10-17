const axios = require('axios');
const keys = require('../config/keys');

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
  const forecast = await getForecast({ q, id: cityId });
  const current = await getCurrent(forecast.city.id);
  const { id, name, coords, weather, main, wind, rain, clouds, dt } = current;
  const { country, sunrise, sunset } = current.sys;
  const { temp, pressure, humidity, temp_min, temp_max } = current.main;
  const {
    id: conditionsId,
    main: conditions,
    description,
    icon
  } = current.weather;
  const results = {
    id,
    dt,
    name,
    country,
    coords,
    sunrise,
    sunset,
    current: {
      conditions,
      conditionsId,
      description,
      icon,
      temp,
      pressure,
      humidity,
      temp_min,
      temp_max,
      wind,
      rain,
      clouds
    },
    forecast: forecast.list
  };
  return results;
};

module.exports = { getCurrent, getCurrent, getInfo };
