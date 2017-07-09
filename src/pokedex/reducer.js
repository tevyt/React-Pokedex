import { handleActions } from 'redux-actions';
import { actionTypes } from './actions';

const { 
  NEXT_PAGE, 
  PREVIOUS_PAGE, 
  LOAD_POKEDEX_PAGE_START,
  LOAD_POKEDEX_PAGE_SUCCESS,
  LOAD_POKEDEX_PAGE_FAILED,
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

const loadPokedexPageStart = (state) => {
  return {
    ...state,
    loading: true,
    loaded: false,
    failed: false,
    changed: false,
  };
};

const loadPokedexPageSuccess = (state, { pokemon }) => {
  return {
    ...state,
    loading: false,
    loaded: true,
    failed: false,
    changed: false,
    pokemon
  };
};

const loadPokedexPageFailed = (state) => {
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
  pokemon: [],
  query: ''
};

export default handleActions({
  [NEXT_PAGE]: nextPage,
  [PREVIOUS_PAGE]: previousPage,
  [SEARCH_POKEMON]: searchPokemon,
  [LOAD_POKEDEX_PAGE_START]: loadPokedexPageStart,
  [LOAD_POKEDEX_PAGE_SUCCESS]: loadPokedexPageSuccess,
  [LOAD_POKEDEX_PAGE_FAILED]: loadPokedexPageFailed
}, initalState);
