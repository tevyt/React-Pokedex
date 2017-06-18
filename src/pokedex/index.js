import { connect } from 'react-redux';

import View from './view';
import { nextPage, previousPage, loadPokemon } from './actions';

const NUMBER_OF_POKEMON = 721;
const POKEMON_PER_PAGE = 20;

const mapStateToProps = (state) => {
  const { pokemon, page, loaded, loading, failed } = state.pokedex;

  const numberOfPages = Math.ceil(NUMBER_OF_POKEMON/POKEMON_PER_PAGE);

  const lastPokemonOnPage = pokemon ? 
    pokemon[pokemon.length - 1] :
    null;


  const correctPage= (pokedexNumber, page) => {
    /*Logic to determine if pokemon should be reloaded 
      Calculate the first pokemon and the last pokemon that
      would be on the current page take the pokedex number of the last loaded pokemon
      If the pokedex number is not in the range (firstOnPage, lastOnPage) 
      New pokemon need to be loaded for this page */

    const lastOnPage = page * POKEMON_PER_PAGE; 
    const firstOnPage = lastOnPage - (POKEMON_PER_PAGE - 1);

    return firstOnPage <= pokedexNumber &&
           lastOnPage >= pokedexNumber;
          
  };
  const pokemonShouldLoad = lastPokemonOnPage && 
                            !correctPage(lastPokemonOnPage['pokedex_number'], page);
  
  return {
    page,
    loaded,
    loading,
    failed,
    firstPage: page == 1,
    lastPage: page == numberOfPages,
    pokemonShouldLoad,
    pokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: (page) => dispatch(loadPokemon(page)),
    nextPage: () => dispatch(nextPage()),
    previousPage: () => dispatch(previousPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
