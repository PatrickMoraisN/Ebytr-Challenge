import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function Menu() {
  return (
    <S.Aside>
      <Link to="/home">Home</Link>
      <Link to="/">Login</Link>
    </S.Aside>
  );
}

export default Menu;
