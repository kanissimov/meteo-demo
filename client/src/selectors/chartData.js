export default city => {
  const temp = (city.forecast || []).map((e, i) => {
    //let utcDate = new Date(e.dt * 1000);
    let tzDate = new Date((e.dt + city.tzOffset) * 1000);
    let hours = tzDate.getHours();
    let isLabel = hours >= 12 && hours < 15;
    if (isLabel) {
      console.log(`hours: ${hours}`);
    }

    return {
      x: tzDate.getTime(),
      y: e.temp,
      marker: {
        enabled: isLabel
      },
      dataLabels: {
        enabled: isLabel,
        useHTML: true,
        formatter: () => {
          const url = `https://openweathermap.org/img/w/${e.icon}.png`;
          return `<div class="chart-label"><img src="${url}" /><div>${e.temp}°C</div></div>`;
        }
      }
    };
  });
  //console.log(temp);
  const config = {
    chart: {},
    title: {
      text: city.name ? `5 Day Forecast for ${city.name}, ${city.country}` : ''
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
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 2
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
        fillOpacity: 0.1,
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
