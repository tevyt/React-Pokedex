import React from 'react'; //eslint-disable-line no-unused-vars

import PokedexEntry from './components/pokedex-entry';
import LeftNavigationButton from './components/navigation-buttons/navigation-button-left';
import RightNavigationButton from './components/navigation-buttons/navigation-button-right';
import PokeballLoadingSpinner from './components/pokeball-loading-spinner';

import './styles.scss';

import { padNumber } from '../app/utilities';

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
    const { pokemon, 
            previousPage, 
            firstPage, 
            nextPage, 
            lastPage, 
            loading } = this.props;
    return <div className='mainContent'>
      <div className='navigation'>
        <LeftNavigationButton onClick={previousPage}
          text='PREVIOUS' hide={firstPage} disabled={loading} />
        <RightNavigationButton onClick={nextPage}
          text='NEXT' hide={lastPage} disabled={loading}/>
      </div>
      <PokeballLoadingSpinner show={loading} />
      {pokemon ?
        <div className='pokemon-list'>
          {pokemon.map((monster, index) => {
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