import { fromJS } from 'immutable';
import DataReducer from './data';

const initialState = fromJS({
  data: null,
  pokemonList: null
});

export default (state=initialState, action) => {
  return fromJS({
    data: DataReducer(state.get('data'), action)
  });
};