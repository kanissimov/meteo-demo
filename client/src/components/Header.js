import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveContext } from '../actions';
import Account from './Account';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="app-header blue-grey">
          <div className="container">
            <Link to="/" className="brand-logo">
              <i className="cloudy material-icons">cloud_queue</i>
              <i className="sunshine material-icons">wb_sunny</i>
              Weatherman
            </Link>
            <div className="right">
              <Account user={this.props.auth} onSave={this.props.saveContext} />
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { saveContext })(Header);
