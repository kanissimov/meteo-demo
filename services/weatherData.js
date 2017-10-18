const celsius = temp => Math.round(temp - 273.15);

module.exports = (currentData, forecastData, tzData) => {
  const tzOffset = (tzData.rawOffset || 0) + (tzData.dstOffset || 0);
  const {
    id,
    name,
    coords,
    weather,
    main,
    wind,
    rain,
    clouds,
    dt
  } = currentData;
  const { country, sunrise, sunset } = currentData.sys;
  const { temp, pressure, humidity, temp_min, temp_max } = currentData.main;
  const {
    id: conditionId,
    main: condition,
    description,
    icon
  } = currentData.weather[0];
  const current = {
    condition,
    conditionId,
    description,
    icon,
    temp: celsius(temp),
    pressure,
    humidity,
    temp_min: celsius(temp_min),
    temp_max: celsius(temp_max),
    wind,
    rain,
    clouds
  };
  const forecast = forecastData.list.map(data => {
    const {
      temp,
      humidity,
      temp_min,
      temp_max,
      pressure,
      sea_level,
      grnd_lvel
    } = data.main;
    const {
      id: conditionId,
      main: condition,
      description,
      icon
    } = data.weather[0];
    const { dt, dt_txt, clouds, wind } = data;
    return {
      dt,
      dt_txt,
      temp: celsius(temp),
      temp_min: celsius(temp_min),
      temp_max: celsius(temp_max),
      conditionId,
      condition,
      description,
      icon,
      humidity,
      pressure,
      clouds,
      wind,
      sea_level,
      grnd_lvel
    };
  });
  return {
    id,
    dt,
    name,
    country,
    coords,
    tzOffset,
    sunrise,
    sunset,
    current,
    forecast
  };
};
