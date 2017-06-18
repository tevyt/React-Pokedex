import { getPokemon } from './services';

const NEXT_PAGE = 'NEXT_PAGE';
const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
const LOAD_POKEMON = 'LOAD_POKEMON';
const LOAD_POKEMON_START = 'LOAD_POKEMON_START';
const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';
const LOAD_POKEMON_FAILED = 'LOAD_POKEMON_FAILED';

export const actionTypes = {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  LOAD_POKEMON_START,
  LOAD_POKEMON_SUCCESS,
  LOAD_POKEMON_FAILED,
  LOAD_POKEMON
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

export const loadPokemonStart = () => {
  return {
    type: LOAD_POKEMON_START
  };
};

export const loadPokemonSuccess = (pokemon) => {
  return {
    type: LOAD_POKEMON_SUCCESS,
    pokemon
  }
};

export const loadPokemonFailed = () => {
  return {
    type: LOAD_POKEMON_FAILED
  };
};

export const loadPokemon = (page) => async (dispatch) => {
  dispatch(loadPokemonStart());
  try {
    const pokemon = await getPokemon(page);
    dispatch(loadPokemonSuccess(pokemon));
  }catch (e){
    dispatch(loadPokemonFailed());
  }
};