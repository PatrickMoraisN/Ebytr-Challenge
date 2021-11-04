import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './style';

function Menu() {
  const [currentRoute] = React.useState(useHistory().location.pathname);

  return (
    <S.Aside>
      <S.Heading>Ebytr</S.Heading>
      <Link to="/home" className={currentRoute === '/home' ? 'active' : ''}>
        Home
      </Link>
      <Link className={currentRoute === '/about' ? 'active' : ''} to="/about">
        About
      </Link>
    </S.Aside>
  );
}

export default Menu;
