import React, { Children } from 'react';
import Proptypes from 'prop-types';

const Article = ({ title, children }) => {
  return (
    <li className="list__item">
      <h2>{title}</h2>
      <p>{children}</p>
    </li>
  );
};

Article.prototype = {
  title: Proptypes.string.isRequired,
  children: Proptypes.string.isRequired,
};

export default Article;
