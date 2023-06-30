import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Blog App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-article">Add Article</Link>
      </nav>
    </header>
  );
}

export default Header;
