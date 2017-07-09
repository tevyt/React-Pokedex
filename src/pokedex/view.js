import React from 'react'; //eslint-disable-line no-unused-vars

import PokedexEntry from './components/pokedex-entry';
import LeftNavigationButton from './components/navigation-buttons/navigation-button-left';
import RightNavigationButton from './components/navigation-buttons/navigation-button-right';
import PokeballLoadingSpinner from './components/pokeball-loading-spinner';
import SearchBar from './components/search-bar';

import './styles.scss';

import { padNumber } from '../app/utilities';

const pokemonImageUrl = (pokedexNumber) => `http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padNumber(pokedexNumber, 3)}.png`;

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { page, query, loadPokedexPage } = this.props;
    loadPokedexPage(page, query);
  }

  componentDidUpdate() {
    const { page, query, pokemonShouldLoad, loadPokedexPage } = this.props;
    if (pokemonShouldLoad) {
      loadPokedexPage(page, query);
    }
  }

  render() {
    const { pokemon, 
            previousPage, 
            firstPage, 
            nextPage, 
            lastPage, 
            loading, 
            onSearch, 
            query } = this.props;
    return <div className='mainContent'>
      <div className='navigation'>
        <LeftNavigationButton onClick={previousPage}
          text='PREVIOUS' hide={firstPage} disabled={loading} />
        <SearchBar query={query} onChange={onSearch} />
        <RightNavigationButton onClick={nextPage}
          text='NEXT' hide={lastPage} disabled={loading}/>
      </div>
      <PokeballLoadingSpinner show={loading} />
      {pokemon.length ?
        <div className='pokemon-list'>
          {pokemon.map((monster, index) => {
            return <PokedexEntry 
              key={index}
              pokedexNumber={monster.pokedexNumber}
              name={monster.name}
              primaryType={monster.primaryType}
              secondaryType={monster.secondaryType}
              image={pokemonImageUrl(monster.pokedexNumber)} />;
          })}
        </div> :
       <div className='no-results-message'>
        {query ? 
          <span>No Pokemon match "{query}"</span> :
          null}
       </div> 
      }
    </div>;
  }
}