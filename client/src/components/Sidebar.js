import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Search from './Search';
import City from './City';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onSearch(q) {
    this.props.fetchCity(q);
  }

  onRemove(id) {
    this.props.removeCity(id);
  }

  onSelect(id) {}

  renderCities() {
    return this.props.cities.map(data => {
      return <City key={data.city.id} data={data} onRemove={this.onRemove} />;
    });
  }

  render() {
    return (
      <div className="sidebar">
        {this.renderCities()}
        <Search label="City" onSearch={this.onSearch} />
      </div>
    );
  }
}

const mapStateToProps = ({ cities }) => ({ cities });

export default connect(mapStateToProps, actions)(Sidebar);
