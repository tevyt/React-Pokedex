import { Map } from 'immutable';

const initialState = Map();

export default (state = initialState, action) => {
  switch (action.type) {
  case 'LOAD_START':
    return state.merge({
      [action.id]: {
        loaded: false,
        loading: true,
        failed: false,
        data: null
      }
    });
  case 'LOAD_END':
    return state.merge({
      [action.id]: {
        loaded: true,
        loading: false,
        failed: false,
        data: action.data,
        loadedPage: action.page || 0
      }
    });
  case 'LOAD_FAIL': 
    return state.merge({
      [action.id]: {
        loaded: false,
        loading: false,
        failed: true,
        data: null
      }
    });
  default:
    return state;
  }
};