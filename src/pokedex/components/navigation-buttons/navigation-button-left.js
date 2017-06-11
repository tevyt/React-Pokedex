import React from 'react'; //eslint-disable-line no-unused-vars

export default ({onClick, show, text}) => {
  if(show){
    return <button className='navigation__button--left' 
              onClick={onClick}>
              <i className='fa fa-chevron-circle-left'/> {text}
            </button>;
  }else{
    return null;
  }
};