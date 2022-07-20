import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

const Application = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer></Footer>
    </div>
  );
};

export default Application;
