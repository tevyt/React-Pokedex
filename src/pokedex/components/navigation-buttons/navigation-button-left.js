import React from 'react'; //eslint-disable-line no-unused-vars

export default ({ onClick, hide, text, disabled }) => {
  if (hide) {
    return null;
  } else {
    return <button className={`navigation__button--left 
    ${disabled ? 'navigation__button--disabled' : null}`}
      onClick={onClick} disabled={disabled}>
      <i className='fa fa-chevron-circle-left' /> {text}
    </button>;
  }
};