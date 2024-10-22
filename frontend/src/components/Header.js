import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Arth Sharma</h1>
      <nav>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
