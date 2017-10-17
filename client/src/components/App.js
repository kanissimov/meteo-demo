import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContext } from '../actions';

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
    this.props.fetchContext();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchContext })(App);
