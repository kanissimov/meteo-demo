const axios = require('axios');
const keys = require('../config/keys');

module.exports = app => {
  app.post('/api/fetch_city', async (req, res) => {
    const prefix = 'http://api.openweathermap.org/data/2.5/forecast';
    const { q, id } = req.body;
    const query = id ? `&id=${id}` : `&q=${q}`;
    const url = `${prefix}?appid=${keys.openWeatherMapKey}${query}`;
    console.log(url);
    const request = await axios.get(url);

    res.send(request.data);
  });

  app.post('/api/save_context', async (req, res) => {
    try {
      req.user.set({
        cities: req.body.cities.map(city => ({ cityId: city })),
        selectedCity: req.body.selectedCity
      });
      await req.user.save();
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.status(422).send(err);
    }
  });
};
