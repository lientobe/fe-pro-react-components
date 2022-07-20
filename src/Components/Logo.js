import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ children }) => {
  return (
    <a href="" className="logo">
      {children}
    </a>
  );
};

Logo.prototype = {
  children: PropTypes.string.isRequired,
};

export default Logo;
