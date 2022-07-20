import React from 'react';
import Article from './Article';

import { dataArticle } from '../data/dataArticle';

const ArticleList = () => {
  return (
    <ul className="list">
      {dataArticle.map(({ title, message }) => {
        return (
          <Article title={title} key={message}>
            {message}
          </Article>
        );
      })}
    </ul>
  );
};

export default ArticleList;
