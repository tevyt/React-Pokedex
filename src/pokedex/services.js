const pokemonApiUrl = 'http://localhost:4567/api/pokemon';

const fetchPokemon = (page, query) => {

  const pageParam = page ?
                    `page=${page}` :
                    null;

  const queryParam = query ?
                     `q=${query}` :
                     null;
  
  const queryParameters = [pageParam, queryParam]
    .filter((param) => param)
    .join('&');
  
  return fetch(`${pokemonApiUrl}?${queryParameters}`);
};

export const getPokemon = (page, query) => {
  return fetchPokemon(page, query)
  .then((data) => data.json());
};