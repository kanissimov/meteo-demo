import $ from 'jquery';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  componentDidUpdate() {
    $('.dropdown-button').dropdown();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="orange accent-3 btn" href="/auth/google">
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <button
              className="chip dropdown-button account btn-flat"
              data-activates="user-menu"
            >
              <i className="material-icons">account_circle</i>
              {this.props.auth.name}
              <i className="material-icons right">arrow_drop_down</i>
            </button>
            <ul id="user-menu" className="dropdown-content">
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </li>
        ];
    }
  }

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
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
