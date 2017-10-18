import React, { Component } from 'react';
import { connect } from 'react-redux';
import Forecast from './Forecast';
import CitySelector from '../selectors/city';
import ChartSelector from '../selectors/chartData';

class Details extends Component {
  render() {
    return (
      <div>
        <Forecast city={this.props.city} config={this.props.config} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cities, selectedCity } = state;
  return {
    cities,
    selectedCity,
    city: CitySelector(state),
    config: ChartSelector(state)
  };
}

export default connect(mapStateToProps)(Details);
