import AppBar from 'material-ui/AppBar';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react'; //eslint-disable-line no-unused-vars

import PokedexEntry from './components/pokedex-entry';

import './styles.scss';

const pad = (n, width) => {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
};

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
        <AppBar title = 'Pokédex'
                className='pokemon-list_header'
                iconElementLeft = { <IconButton> <NavigationChevronLeft/> </IconButton>}
                iconElementRight = { <IconButton><NavigationChevronRight /></IconButton>}
                onLeftIconButtonTouchTap={this.props.previousPage}
                onRightIconButtonTouchTap={this.props.nextPage}/>
        <div className='pokemon-list_container'>
          <GridList cols={4} padding={20}  className='pokemon-list_grid'>
          {this.props.pokemon.map((monster, index) => {
            return <GridTile title={monster.name} className='pokemon-list_item' key={index}>
                     <PokedexEntry image={`http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pad(monster['pokedex_number'], 3)}.png`}/>
                   </GridTile>;
          })}
          </GridList>
        </div>
      </div>;
    }
    else{
      return null;
    }
  }
}