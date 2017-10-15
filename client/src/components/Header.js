import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="indigo lighten-1 btn" href="/auth/google">
              Login with Google
            </a>
          </li>
        );
      default:
        return [
          <li key="2">
            <span className="account">
              <i className="material-icons">account_circle</i>
            </span>
            <span>{this.props.auth.name}</span>
          </li>,
          <li key="1">
            <a className="indigo lighten-1 btn" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <header>
        <nav className="app-header teal lighten-3">
          <div className="container">
            <Link to="/" className="brand-logo">
              <span>weather</span>
              <i className="cloudy material-icons">cloud_queue</i>
              <i className="sunshine material-icons">wb_sunny</i>
              <span>man</span>
            </Link>
            <ul className="right">{this.renderContent()}</ul>
          </div>
        </nav>
      </header>
    );
  }
}

// <i className="material-icons">ac_unit</i>
// <i className="material-icons">beach_access</i>

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
