export default city => {
  const temp = (city.forecast || []).map((e, i) => ({
    x: new Date(e.dt * 1000).getTime(),
    y: e.temp
  }));
  // console.log(temp);
  const config = {
    chart: {},
    title: {
      text: `5 Day Forecast for ${city.name}, ${city.country}`
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    tooltip: {
      valueSuffix: '°C'
    },
    plotOptions: {
      areaspline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5
          }
        },
        marker: {
          enabled: false
        }
      }
    },
    series: [
      {
        name: 'Temperature',
        type: 'areaspline',
        data: temp
      }
    ]
  };

  return config;
};

/*

,
marker:
  i === 10
    ? { symbol: `url(https://openweathermap.org/img/w/${e.icon}.png)` }
    : null

marker: {
  symbol: `url(https://openweathermap.org/img/w/${e.icon}.png)`
}
i === 10
  ? {
      y: e.temp
    }
  : e.temp

*/
