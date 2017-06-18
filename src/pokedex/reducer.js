import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';

const { 
  NEXT_PAGE, 
  PREVIOUS_PAGE, 
  LOAD_POKEMON_START,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILED
 } = actionTypes;

const nextPage = (state) => { 
  const { page } = state;
  return {
    ...state, 
    page: page + 1
  };
};

const previousPage = (state) => {
  const { page } = state;
  return {
    ...state,
    page: page - 1 || 1
  };
};

const loadPokemonStart = (state) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    failed: false,
  };
};

const loadPokemonSuccess = (state, action) => {
  const { pokemon } = action;
  return {
    ...state,
    loading: false,
    loaded: true,
    failed: false,
    pokemon
  };
};

const loadPokemonFailed = (state) => {
  return {
    ...state,
    loading: false,
    loaded: false,
    failed: true
  };
};

const initalState = {
  page: 1,
  loaded: false,
  loading: false,
  failed: false,
  pokemon: []
};

export default handleActions({
  [NEXT_PAGE]: nextPage,
  [PREVIOUS_PAGE]: previousPage,
  [LOAD_POKEMON_START]: loadPokemonStart,
  [LOAD_POKEMON_SUCCESS]: loadPokemonSuccess,
  [LOAD_POKEMON_FAILED]: loadPokemonFailed
}, initalState);
