import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { q: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSearch(this.state.q);
    this.setState({ q: '' });
  }

  onInputChange(event) {
    this.setState({ q: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={e => this.onFormSubmit(e)}>
          <div className="input-field col s9">
            <input
              type="text"
              id="autocomplete-input"
              value={this.state.q}
              onChange={e => this.onInputChange(e)}
              className="autocomplete"
            />
            <label htmlFor="autocomplete-input">{this.props.label}</label>
          </div>
          <div className="input-field col s3">
            <button type="submit" className="btn-floating orange accent-3">
              <i className="material-icons">search</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
