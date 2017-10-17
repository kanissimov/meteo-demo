const axios = require('axios');
const keys = require('../config/keys');

module.exports = {
  getForecast: async ({ q, id }) => {
    const prefix = 'http://api.openweathermap.org/data/2.5/forecast';
    const query = id ? `&id=${id}` : `&q=${q}`;
    const url = `${prefix}?appid=${keys.openWeatherMapKey}${query}`;
    const request = await axios.get(url);
    return request.data;
  },

  getCurrent: async id => {}
};
