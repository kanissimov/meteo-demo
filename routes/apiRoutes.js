const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/fetch_city', async (req, res) => {
    const prefix = 'http://api.openweathermap.org/data/2.5/forecast';
    const url = `${prefix}?appid=${keys.openWeatherMapKey}&q=${req.body.q}`;
    const request = await axios.get(url);

    res.send(request.data);
  });

  app.post('/api/save_context', async (req, res) => {
    res.sendStatus(200);
  });
};
