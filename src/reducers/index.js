import { Map } from 'immutable';

import DataReducer from './data';
import PokemonListReducer from './pokemonList';

const initialState = new Map({
  data: null,
  pokemonList: null
});

export default (state=initialState, action) => {
  return Map({
    data: DataReducer(state.get('data'), action),
    pokemonList: PokemonListReducer(state.get('pokemonList'), action)
  });
};