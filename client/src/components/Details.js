import React, { Component } from 'react';
import { connect } from 'react-redux';
import Forecast from './Forecast';
import CitySelector from '../selectors/city';
import ChartData from '../selectors/chartData';

class Details extends Component {
  render() {
    return (
      <div>
        <Forecast city={this.props.city} config={ChartData(this.props.city)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cities, selectedCity } = state;
  return {
    cities,
    selectedCity,
    city: CitySelector(state)
  };
}

export default connect(mapStateToProps)(Details);
