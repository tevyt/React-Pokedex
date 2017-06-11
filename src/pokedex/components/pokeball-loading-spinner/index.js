import React from 'react'; //eslint-disable-line no-unused-vars
export default ({ show }) => {
  if(show){
    return <div className='loading-spinner'>
            <img className='loading-spinner__image' src='images/pokeball.png' />
          </div>;
          
  }else{
    return null;
  }
};