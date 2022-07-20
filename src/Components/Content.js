import React from 'react';
import ArticleList from './main/ArticleList';

const Content = () => {
  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>Posts</h1>
          <ArticleList />
        </div>
      </section>
    </main>
  );
};

export default Content;