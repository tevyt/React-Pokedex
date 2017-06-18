import React from 'react'; //eslint-disable-line no-unused-vars

import PokemonTypePill from '../../../app/components/pokemon-type-pill';
import { padNumber } from '../../../app/utilities';

export default ({ image, name, pokedexNumber, primaryType, secondaryType }) => {
  return <div className='pokemon-list__item'>
          <img className='pokemon-list__item__image' src={image} />
          <div className='pokemon-list__item__description'>
            <span className='pokemon-list__item__description__pokedex-number'>
            #{padNumber(pokedexNumber, 3)}
            </span>
            <span className='pokemon-list__item__description__pokemon-name'>
              {name.split('-')[0]} {/*Messed up when scraping data from pokemon api
                                      Some pokemon names have forms e.g Deoxys-Normal
                                      Drop the '-normal part
                                      TODO Fix in Database*/}
            </span>
            <PokemonTypePill type={primaryType} />
            <PokemonTypePill type={secondaryType} />
          </div>
        </div>;
};