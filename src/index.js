import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './app/app';
import Pokedex from './pokedex';
import store from './app/store';

import 'font-awesome/css/font-awesome.css';
import './styles/base.scss';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/pokedex" component={Pokedex} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);