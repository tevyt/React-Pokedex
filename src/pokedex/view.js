import React from 'react'; //eslint-disable-line no-unused-vars

import PokedexEntry from './components/pokedex-entry';

import './styles.scss';

const pad = (n, width) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};

const pokemonImageUrl = (pokedexNumber) => `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(pokedexNumber, 3)}.png`;

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    const page = this.props.match.params.page;
    this.props.loadPokemon(page);
  }

  render() {
    if (this.props.loading) {
      return <h1>Loading...</h1>;
    }
    if (this.props.failed) {
      return <h1>Failed!</h1>;
    }
    if (this.props.loaded) {
      return <div className='pokemon-list'>
          {this.props.pokemon.map((monster, index) => {
            return <PokedexEntry 
            key={index}
            image={pokemonImageUrl(monster['pokedex_number'])}/>;
          })}
        </div>;
    }
    else{
      return null;
    }
  }
}