import { getPokemon } from './services';

const NEXT_PAGE = 'NEXT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const SEARCH_POKEMON = 'SEARCH_POKEMON';
const LOAD_POKEDEX_PAGE = 'LOAD_POKEDEX_PAGE';
const LOAD_POKEDEX_PAGE_START = 'LOAD_POKEDEX_PAGE_START';
const LOAD_POKEDEX_PAGE_SUCCESS = 'LOAD_POKEDEX_PAGE_SUCCESS';
const LOAD_POKEDEX_PAGE_FAILED = 'LOAD_POKEDEX_PAGE_FAILED';

export const actionTypes = {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SEARCH_POKEMON,
  LOAD_POKEDEX_PAGE_START,
  LOAD_POKEDEX_PAGE_SUCCESS,
  LOAD_POKEDEX_PAGE_FAILED,
  LOAD_POKEDEX_PAGE
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE
  };
};

export const previousPage = () => {
  return {
    type: PREVIOUS_PAGE
  };
};

export const searchPokemon = (query) => {
  return {
    type: SEARCH_POKEMON,
    query
  };
};

export const loadPokedexPageStart = () => {
  return {
    type: LOAD_POKEDEX_PAGE_START
  };
};

export const loadPokedexPageSuccess = (pokemon) => {
  return {
    type: LOAD_POKEDEX_PAGE_SUCCESS,
    pokemon
  }
};

export const loadPokedexPageFailed = () => {
  return {
    type: LOAD_POKEDEX_PAGE_FAILED
  };
};

export const loadPokedexPage = (page, query) => async (dispatch) => {
  dispatch(loadPokedexPageStart());
  try {
    const pokemon = await getPokemon(page, query);
    dispatch(loadPokedexPageSuccess(pokemon));
  }catch (e){
    dispatch(loadPokedexPageFailed());
  }
};