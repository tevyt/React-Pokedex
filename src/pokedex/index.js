import { connect } from 'react-redux';

import View from './view';

import { fetchPokemonList } from '../services';

const pokemonListField = (field) => ['data', 'pokemonList', field];

const mapStateToProps = (state) => {
  const fetchedPokemon = state.getIn(pokemonListField('data'));
  const pokemon = fetchedPokemon ?
                  fetchedPokemon.toJS() :
                  [];
  
  const numberOfPokemon = 721;

  const numberOfPages = Math.ceil(numberOfPokemon/20);

  const page = state.getIn(['pokedex', 'page']);
  return {
    page,
    loaded: state.getIn(pokemonListField('loaded')),
    loading: state.getIn(pokemonListField('loading')),
    failed: state.getIn(pokemonListField('failed')),
    firstPage: page == 1,
    lastPage: page == numberOfPages,
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
