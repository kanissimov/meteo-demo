const weather = require('../services/weather');

const DEFAULT_CITIES = [6167865, 5128581, 2643743, 2988507];

module.exports = app => {
  app.post('/api/fetch_city', async (req, res) => {
    try {
      const { q, id } = req.body;
      const info = await weather.getInfo({ q, id });
      res.send(info);
    } catch (err) {
      console.log(err);
      res.status(422).send(err);
    }
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
    const cityIds =
      user && user.cities.length > 0
        ? user.cities.map(e => e.cityId)
        : DEFAULT_CITIES;
    const cities = await Promise.all(
      cityIds.map(async id => await weather.getInfo({ id }))
    );
    const context = {
      user: user ? { name: user.name } : null,
      selectedCity: user ? user.selectedCity : cities[0].id,
      cities
    };
    res.send(context);
  });
};
