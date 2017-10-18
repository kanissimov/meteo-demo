import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class Forecast extends Component {
  //  componentDidMount() {
  //    let chart = this.refs.chart.getChart();
  //    chart.series[0].addPoint({x: 10, y: 12});
  //  }

  render() {
    const { config } = this.props;

    return config ? <ReactHighcharts config={config} ref="chart" /> : <div />;
  }
}

export default Forecast;
