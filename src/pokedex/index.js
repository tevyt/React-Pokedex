import { connect } from 'react-redux';

import View from './view';
import { nextPage, previousPage, loadPokemon, searchPokemon } from './actions';

const NUMBER_OF_POKEMON = 721;
const POKEMON_PER_PAGE = 20;

const mapStateToProps = (state) => {
  const { pokemon, page, loaded, loading, failed, changed, query } = state.pokedex;

  const numberOfPages = Math.ceil(NUMBER_OF_POKEMON/POKEMON_PER_PAGE);

  const pokemonShouldLoad = changed; 
  
  return {
    page,
    loaded,
    loading,
    failed,
    firstPage: page == 1,
    lastPage: page == numberOfPages || pokemon.length < POKEMON_PER_PAGE,
    pokemonShouldLoad,
    pokemon,
    query
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: (page, query) => dispatch(loadPokemon(page, query)),
    nextPage: () => dispatch(nextPage()),
    previousPage: () => dispatch(previousPage()),
    onSearch: (query) => dispatch(searchPokemon(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
