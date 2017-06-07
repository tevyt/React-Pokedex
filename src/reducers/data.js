import { fromJS } from 'immutable';

const initialState = fromJS({});

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