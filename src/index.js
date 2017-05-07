import React from 'react'; //eslint-disable-line
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './app';
import PokemonList from './pokemon';
import store from './store';

import './styles/base.scss';

injectTapEventPlugin(); //Required by MaterialUI

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/pokedex" component={PokemonList} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);