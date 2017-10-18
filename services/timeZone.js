const axios = require('axios');
const keys = require('../config/keys');

const getTimeZone = async data => {
  const prefix = `https://maps.googleapis.com/maps/api/timezone/json?key=${keys.googleTimeZoneKey}`;
  const url = `${prefix}&location=${data.lat},${data.lon}&timestamp=${data.timestamp}`;
  const request = await axios.get(url);

  return request.data;
};

module.exports = getTimeZone;
