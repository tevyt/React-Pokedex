import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import React from 'react'; //eslint-disable-line no-unused-vars

import { getPokemonList } from '../loaders';


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
      return <div className="pokemonList">
        <AppBar title = "Pokédex"
                iconElementLeft = { <IconButton> < NavigationChevronLeft / > </IconButton>}
                iconElementRight = { <IconButton><NavigationChevronRight /></IconButton>}
                onLeftIconButtonTouchTap={this.props.previousPage}
                onRightIconButtonTouchTap={this.props.nextPage}/>
        {this.props.pokemon.map((monster, index) => {
          return <li className="pokemonList_item" key={index}>{monster.get('name')}</li>;
        })}
      </div>;
    }
    else{
      return null;
    }
  }
}