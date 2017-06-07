const pokemonApiUrl = 'http://localhost:4567/api/pokemon';

export const fetchPokemonList =  (page) => 
  fetch(`${pokemonApiUrl}?page=${page}`)
  .then((data) => data.json());