import { connect } from 'react-redux';

import View from './view';

import { fetchPokemonList } from '../services';

const pokemonListField = (field) => ['data', 'pokemonList', field];

const NUMBER_OF_POKEMON = 721;
const POKEMON_PER_PAGE = 20;

const mapStateToProps = (state) => {
  const fetchedPokemon = state.getIn(pokemonListField('data'));
  const pokemon = fetchedPokemon ?
                  fetchedPokemon.toJS() :
                  [];
  

  const numberOfPages = Math.ceil(NUMBER_OF_POKEMON/POKEMON_PER_PAGE);

  const page = state.getIn(['pokedex', 'page']);

  const lastPokemonOnPage = pokemon[pokemon.length - 1];

  const correctPage= (pokedex_number, page) => {
    /*Logic to determine if pokemon should be reloaded
      Calculate the first pokemon and the last pokemon that
      would be on the current page take the pokedex number of the last loaded pokemon
      If the pokedex number is not in the range (firstOnPage, lastOnPage) 
      New pokemon need to be loaded for this page */

    const lastOnPage = page * POKEMON_PER_PAGE; 
    const firstOnPage = lastOnPage - (POKEMON_PER_PAGE - 1);

    return firstOnPage <= pokedex_number &&
           lastOnPage >= pokedex_number;
          
  };
  const pokemonShouldLoad = lastPokemonOnPage && 
                            !correctPage(lastPokemonOnPage['pokedex_number'], page);
  return {
    page,
    loaded: state.getIn(pokemonListField('loaded')),
    loading: state.getIn(pokemonListField('loading')),
    failed: state.getIn(pokemonListField('failed')),
    firstPage: page == 1,
    lastPage: page == numberOfPages,
    pokemonShouldLoad,
    pokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  const success = (data) => dispatch({type: 'LOAD_END', id: 'pokemonList', data});
  const fail = () => dispatch({type: 'LOAD_FAIL' });
  return {
    loadPokemon: (page) => {
      dispatch({ type: 'LOAD_START', id: 'pokemonList' });
      fetchPokemonList(page)
      .then(success, fail);
    },
    nextPage: () => dispatch({type: 'NEXT_PAGE'}),
    previousPage: () => dispatch({type: 'PREVIOUS_PAGE'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
