import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';
import Pokedex from './pokedex';
import store from './store';

import './styles/base.scss';

injectTapEventPlugin(); //Required by MaterialUI

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/pokedex/:page" component={Pokedex} />
      </App>
    </Router>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);