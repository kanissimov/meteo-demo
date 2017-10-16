import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

const Layout = () => {
  return [
    <Header key="header" />,
    <Route key="1" path="/" exact component={Main} />,
    <Route key="2" path="/:city" exact component={Main} />,
    <Footer key="footer" />
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
