const celsius = temp => Math.round(temp - 273.15);

module.exports = (currentData, forecastData) => {
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
    id: conditionsId,
    main: conditions,
    description,
    icon
  } = currentData.weather;
  const current = {
    conditions,
    conditionsId,
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
      id: conditionsId,
      main: conditions,
      description,
      icon
    } = data.weather[0];
    const { dt, clouds, wind } = data;
    return {
      dt,
      temp: celsius(temp),
      temp_min: celsius(temp_min),
      temp_max: celsius(temp_max),
      conditionsId,
      conditions,
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
    sunrise,
    sunset,
    current,
    forecast
  };
};
