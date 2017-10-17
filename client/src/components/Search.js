import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { q: '' };
  }

  onSubmit() {
    this.props.onSearch(this.state.q);
    this.setState({ q: '' });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.onSubmit();
  }

  onInputChange(event) {
    this.setState({ q: event.target.value });
  }

  render() {
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <div className="input-field">
          <i className="material-icons prefix" onClick={() => this.onSubmit()}>
            search
          </i>
          <input
            id="search-input"
            type="text"
            value={this.state.q}
            onChange={e => this.onInputChange(e)}
            placeholder={this.props.label}
          />
        </div>
      </form>
    );
  }
}

export default Search;
