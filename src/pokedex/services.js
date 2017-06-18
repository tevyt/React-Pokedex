const pokemonApiUrl = 'http://localhost:4567/api/pokemon';

const fetchPokemon = (page) => fetch(`${pokemonApiUrl}?page=${page}`);

export const getPokemon = (page) => {
  return fetchPokemon(page)
  .then((data) => data.json());
};