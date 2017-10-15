import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import City from './City';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />,
          <main>
            <Route path="/" exact component={Dashboard} />
            <Route path="/:city" exact component={City} />
          </main>,
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
