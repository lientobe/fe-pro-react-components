import React from 'react';
import Nav from './header/Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo>My Logo</Logo>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
