import store from './store';

const pokemonApiUrl = 'http://localhost:5000/api/pokemon';

const fetchPokemonList = (page) => fetch(`${pokemonApiUrl}?page=${page}`).then((data) => data.json());

export const getPokemonList = (page = 1) => {
  store.dispatch({type: 'LOAD_START', id: 'pokemonList'});
  fetchPokemonList(page)
  .then((data) => {
    store.dispatch({type: 'LOAD_END', id: 'pokemonList', page, data});
  })
  .catch(() => {
    store.dispatch({type: 'LOAD_FAIL', id: 'pokemonList'});
  });
};
      