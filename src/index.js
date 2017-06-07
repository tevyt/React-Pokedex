import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './app';
import Pokedex from './pokedex';
import store from './store';

import './styles/base.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/pokedex/:page" component={Pokedex} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);