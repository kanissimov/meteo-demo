import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Search from './Search';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(q) {
    this.props.fetchWeather(q);
  }

  renderCard() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey lighten-4">
            <div className="card-content white-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              <Link to="/">Go home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="sidebar">
        {this.renderCard()}
        <Search label="City" onSearch={this.onSearch} />
      </div>
    );
  }
}

export default connect(null, actions)(Sidebar);
