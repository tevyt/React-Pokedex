import React from 'react'; //eslint-disable-line no-unused-vars

export default ({onClick, hide, text}) => {
  if(hide){
    return null;
  }else{
    return <button className='navigation__button--left' 
              onClick={onClick}>
              <i className='fa fa-chevron-circle-left'/> {text}
            </button>;
  }
};