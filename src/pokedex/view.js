import AppBar from 'material-ui/AppBar';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react'; //eslint-disable-line no-unused-vars

import { getPokemonList } from '../loaders';
import PokedexEntry from './components/pokedex-entry';

import styles from './styles.scss';


export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    getPokemonList(this.props.page);
  }

  componentDidUpdate() {
    if(this.props.loadedPage && (this.props.page !== this.props.loadedPage)){
      getPokemonList(this.props.page);
    }
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
        <div class='pokemon-list_container'>
          <GridList cols={4} padding={20}  className='pokemon-list_grid'>
          {this.props.pokemon.map((monster, index) => {
            return <GridTile title={monster.name} className='pokemon-list_item' key={index}>
                     <PokedexEntry image={monster.get('imageUrl')}/>
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