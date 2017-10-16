import $ from 'jquery';
import React, { Component } from 'react';

class Account extends Component {
  componentDidUpdate() {
    $('.dropdown-button').dropdown();
  }

  render() {
    const { user, onSave } = this.props;
    switch (user) {
      case null:
        return <div />;
      case false:
        return (
          <div>
            <a className="orange accent-3 btn" href="/auth/google">
              Login with Google
            </a>
          </div>
        );
      default:
        return (
          <div>
            <button
              className="chip dropdown-button account btn-flat"
              data-activates="user-menu"
            >
              <i className="material-icons">account_circle</i>
              {user.name}
              <i className="material-icons right">arrow_drop_down</i>
            </button>
            <ul id="user-menu" className="dropdown-content">
              <li>
                <a onClick={e => onSave()}>Save selections</a>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </ul>
          </div>
        );
    }
  }
}

export default Account;
