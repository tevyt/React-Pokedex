import React from 'react'; //eslint-disable-line no-unused-vars

export default ({ image }) => {
  return <div className='pokemon-list__item'>
          <img className='pokemon-list__item__image' src={image} />
        </div>;
};