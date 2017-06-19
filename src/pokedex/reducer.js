import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';

const { 
  NEXT_PAGE, 
  PREVIOUS_PAGE, 
  LOAD_POKEMON_START,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILED,
  SEARCH_POKEMON
 } = actionTypes;

const nextPage = (state) => { 
  const { page } = state;
  return {
    ...state, 
    page: page + 1,
    changed: true
  };
};

const previousPage = (state) => {
  const { page } = state;
  return {
    ...state,
    page: page - 1 || 1,
    changed: true
  };
};

const searchPokemon = (state, { query }) => {
  return {
    ...state,
    query,
    page: 1,
    changed: true
  };
};

const loadPokemonStart = (state) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    failed: false,
    changed: false
  };
};

const loadPokemonSuccess = (state, { pokemon }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    failed: false,
    changed: false,
    pokemon
  };
};

const loadPokemonFailed = (state) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    failed: true,
    changed: false
  };
};

const initalState = {
  page: 1,
  loaded: false,
  loading: false,
  failed: false,
  changed: false,
  pokemon: []
};

export default handleActions({
  [NEXT_PAGE]: nextPage,
  [PREVIOUS_PAGE]: previousPage,
  [SEARCH_POKEMON]: searchPokemon,
  [LOAD_POKEMON_START]: loadPokemonStart,
  [LOAD_POKEMON_SUCCESS]: loadPokemonSuccess,
  [LOAD_POKEMON_FAILED]: loadPokemonFailed
}, initalState);
