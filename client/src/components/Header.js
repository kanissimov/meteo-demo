import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveContext, fetchCity } from '../actions';
import Account from './Account';
import Search from './Search';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="app-header blue-grey">
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">
              <i className="cloudy material-icons">cloud_queue</i>
              <i className="sunshine material-icons">wb_sunny</i>
              <span className="brand-title">Météo</span>
            </Link>
            <ul className="right">
              <li className="search-wrapper">
                <Search
                  label="Add city..."
                  onSearch={q => this.props.fetchCity(q)}
                />
              </li>
              <li>
                <Account
                  user={this.props.auth}
                  onSave={this.props.saveContext}
                />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { saveContext, fetchCity })(Header);
