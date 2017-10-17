const weather = require('../services/weather');

module.exports = app => {
  app.post('/api/fetch_city', async (req, res) => {
    const { q, id } = req.body;
    const forecast = await weather.getForecast({ q, id });
    res.send(forecast);
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

  app.get('/api/fetch_context', async (req, res) => {
    const user = req.user && req.user.toObject({ virtuals: true });
    if (user) {
      res.send({
        user,
        selectedCity: user.selectedCity,
        cities: await Promise.all(
          user.cities.map(async city => {
            return await weather.getForecast({ id: city.cityId });
          })
        )
      });
    } else {
      res.send(false);
    }
  });
};
