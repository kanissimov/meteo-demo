import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCity, removeCity } from '../actions';
import City from './City';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  async onRemove(id) {
    await this.props.removeCity(id);
    if (this.props.cities[0]) {
      this.props.selectCity(this.props.cities[0].city.id);
    }
  }

  renderCities() {
    return this.props.cities.map(city => {
      return (
        <City
          key={city.id}
          city={city}
          selected={city.id === this.props.selectedCity}
          onRemove={this.onRemove}
          onSelect={id => this.props.selectCity(id)}
        />
      );
    });
  }

  render() {
    return <div className="sidebar">{this.renderCities()}</div>;
  }
}

function mapStateToProps({ cities, selectedCity }) {
  return { cities, selectedCity };
}

export default connect(mapStateToProps, { selectCity, removeCity })(Sidebar);
