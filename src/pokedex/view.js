import React from 'react'; //eslint-disable-line no-unused-vars

import PokedexEntry from './components/pokedex-entry';
import LeftNavigationButton from './components/navigation-buttons/navigation-button-left';
import RightNavigationButton from './components/navigation-buttons/navigation-button-right';
import PokeballLoadingSpinner from './components/pokeball-loading-spinner';

import './styles.scss';

import { padNumber } from '../utilities';

const pokemonImageUrl = (pokedexNumber) => `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padNumber(pokedexNumber, 3)}.png`;

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPokemon(this.props.page);
  }

  componentDidUpdate() {
    if (this.props.pokemonShouldLoad) {
      this.props.loadPokemon(this.props.page);
    }
  }

  render() {
    return <div className='mainContent'>
      <div className='navigation'>
        <LeftNavigationButton onClick={this.props.previousPage}
          text='PREVIOUS' hide={this.props.firstPage} />
        <RightNavigationButton onClick={this.props.nextPage}
          text='NEXT' hide={this.props.lastPage} />
      </div>
      <PokeballLoadingSpinner show={this.props.loading} />
      {this.props.pokemon ?
        <div className='pokemon-list'>
          {this.props.pokemon.map((monster, index) => {
            return <PokedexEntry 
              key={index}
              pokedexNumber={monster['pokedex_number']}
              name={monster['name']}
              primaryType={monster['primary_type']}
              secondaryType={monster['secondary_type']}
              image={pokemonImageUrl(monster['pokedex_number'])} />;
          })}
        </div> :
        null
      }
    </div>;
  }
}