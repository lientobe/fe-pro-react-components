import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ url, children }) => {
  return (
    <>
      <li className="nav-list__item">
        <a href={url}>{children}</a>
      </li>
    </>
  );
};

ListItem.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ListItem;
