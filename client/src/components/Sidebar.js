import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import City from './City';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(id) {
    this.props.removeCity(id);
    if (this.props.cities[0]) {
      this.props.selectCity(this.props.cities[0].city.id);
    }
  }

  renderCities() {
    return this.props.cities.map(data => {
      return (
        <City
          key={data.city.id}
          data={data}
          selected={data.city.id === this.props.selectedCity}
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

export default connect(mapStateToProps, actions)(Sidebar);
