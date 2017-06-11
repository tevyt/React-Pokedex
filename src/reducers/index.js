import { fromJS } from 'immutable';
import DataReducer from './data';
import PokedexReducer from './pokedex';

const initialState = fromJS({
  data: null,
  pokedex: null
});

export default (state=initialState, action) => {
  return fromJS({
    data: DataReducer(state.get('data'), action),
    pokedex: PokedexReducer(state.get('pokedex'), action)
  });
};