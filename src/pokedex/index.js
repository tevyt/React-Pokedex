import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => {
  return {
    loaded: state.getIn(['data', 'pokemonList', 'loaded']),
    loading: state.getIn(['data', 'pokemonList', 'loading']),
    failed: state.getIn(['data', 'pokemonList', 'failed']),
    pokemon: state.getIn(['data', 'pokemonList', 'data'  ]),
    page: state.getIn(['pokemonList', 'page']),
    loadedPage: state.getIn(['data','pokemonList', 'loadedPage'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    previousPage: () => dispatch({type: 'PREVIOUS_PAGE'}),
    nextPage: () => dispatch({type: 'NEXT_PAGE'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
