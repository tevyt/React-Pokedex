import React from 'react'; //eslint-disable-line no-unused-vars

import './styles.scss';

export default ({ type }) => {
  return <div className={`pill pill--small pill--${type}`}>
          {type}
        </div>;
};