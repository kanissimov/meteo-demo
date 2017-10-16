const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/fetch_weather', async (req, res) => {
    const prefix = 'http://api.openweathermap.org/data/2.5/forecast';
    const url = `${prefix}?appid=${keys.openWeatherMapKey}&q=${req.body.q}`;
    // console.log(req);

    const request = await axios.get(url);
    //    console.log(request.data);
    res.send(request.data);
  });
};
