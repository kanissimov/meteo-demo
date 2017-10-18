import { createSelector } from 'reselect';
import city from './city';

const data = city => {
  if (!city.forecast) {
    return null;
  }
  const ranges = []; //city.forecast.map(e => [e.dt, e.temp_min, e.temp_max]);
  const averages = []; //city.forecast.map(e => [e.dt, e.temp]);

  const options = {
    xAxis: {
      type: 'datetime'
    },

    yAxis: {
      title: {
        text: null
      }
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C'
    },

    legend: {},

    series: [
      {
        name: 'Temperature',
        data: averages,
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 2
          //            lineColor: Highcharts.getOptions().colors[0]
        }
      },
      {
        name: 'Range',
        data: ranges,
        type: 'arearange',
        lineWidth: 0,
        linkedTo: ':previous',
        //      color: Highcharts.getOptions().colors[0],
        fillOpacity: 0.3,
        zIndex: 0,
        marker: {
          enabled: false
        }
      }
    ]
  };

  return options;
};

export default createSelector(state => city(state), data);

//  state => state.cities.find(city => city.id === state.selectedCity),
