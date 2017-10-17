import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveContext, fetchCity, selectCity } from '../actions';
import Account from './Account';
import Search from './Search';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSave() {
    const { cities, selectedCity } = this.props;
    const ids = cities.map(city => city.id);
    this.props.saveContext({ cities: ids, selectedCity });
  }

  async onSearch(q) {
    const id = await this.props.fetchCity({ q });
    if (id) {
      this.props.selectCity(id);
    }
  }

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
                <Search label="Add city..." onSearch={this.onSearch} />
              </li>
              <li>
                <Account user={this.props.auth} onSave={this.onSave} />
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

function mapStateToProps({ auth, cities, selectedCity }) {
  return { auth, cities, selectedCity };
}

export default connect(mapStateToProps, { saveContext, fetchCity, selectCity })(
  Header
);
