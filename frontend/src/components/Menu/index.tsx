import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Menu;
