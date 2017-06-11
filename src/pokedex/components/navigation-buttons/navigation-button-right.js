import React from 'react'; //eslint-disable-line no-unused-vars

export default({onClick, hide, text}) => {

  if(hide){
    return null;
  }else{
    return <button className='navigation__button--right' onClick={onClick}>
            {text} <i className='fa fa-chevron-circle-right' /> 
          </button>;
  }
}