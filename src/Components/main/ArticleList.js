import React from 'react';
import Article from './Article';

import { dataArticle } from '../data/dataLists';

const ArticleList = () => {
  return (
    <ul className="list">
      {dataArticle.map(({ title, message, id }) => {
        return (
          <Article title={title} key={id}>
            {message}
          </Article>
        );
      })}
    </ul>
  );
};

export default ArticleList;
