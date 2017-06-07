import { connect } from 'react-redux';

import View from './view';

import { fetchPokemonList } from '../services';

const pokemonListField = (field) => ['data', 'pokemonList', field];

const mapStateToProps = (state) => {
  const fetchedPokemon = state.getIn(pokemonListField('data'));
  const pokemon = fetchedPokemon ?
                  fetchedPokemon.toJS() :
                  [];

  return {
    loaded: state.getIn(pokemonListField('loaded')),
    loading: state.getIn(pokemonListField('loading')),
    failed: state.getIn(pokemonListField('failed')),
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
