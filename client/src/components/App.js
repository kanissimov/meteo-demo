import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import City from './City';

const Layout = () => {
  return [
    <Header key="0" />,
    <Route key="1" path="/" exact component={Main} />,
    <Route key="2" path="/:city" exact component={City} />,
    <Footer key="9" />
  ];
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
