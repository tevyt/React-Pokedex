import { Map } from 'immutable';
import { createStore } from 'redux';

import Reducer from './reducers';

export default createStore(Reducer, Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());