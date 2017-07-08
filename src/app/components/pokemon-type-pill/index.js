import React from 'react'; //eslint-disable-line no-unused-vars

import './styles.scss';

export default ({ type }) => {
  if(type === 'null'){
    return null;
  }
  return <div className={`pill pill--small pill--${type}`}>
          {type}
        </div>;
};