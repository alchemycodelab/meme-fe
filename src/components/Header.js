import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/memes">My Memes</Link>
      <Link to="/">Create a meme</Link>
    </nav>
  </header>
);

export default Header;
