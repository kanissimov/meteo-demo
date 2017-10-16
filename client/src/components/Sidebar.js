import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
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
        <div className="row">
          <div className="input-field col s8">
            <input
              type="text"
              id="autocomplete-input"
              className="autocomplete"
            />
            <label htmlFor="autocomplete-input">City</label>
          </div>
          <div className="input-field col s4">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Go
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

/*


*/
