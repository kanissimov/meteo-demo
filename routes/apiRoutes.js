const weather = require('../services/weather');

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
    if (user) {
      const cities = await Promise.all(
        user.cities.map(async city => {
          console.log(`city id: ${city.cityId}`);
          return await weather.getInfo({ id: city.cityId });
        })
      );
      const context = {
        user: { name: user.name },
        selectedCity: user.selectedCity,
        cities: cities
      };
      res.send(context);
    } else {
      res.send(null);
    }
  });
};
