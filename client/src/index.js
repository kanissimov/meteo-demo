import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import './styles/layout.css';
import './styles/header.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const middleware = [reduxThunk];
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
