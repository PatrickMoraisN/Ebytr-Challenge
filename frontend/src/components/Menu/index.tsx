import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import * as S from './style';

function Menu() {
  const [currentRoute] = React.useState(useHistory().location.pathname);

  return (
    <S.Aside>
      <S.Heading>Ebytr</S.Heading>
      <Link to="/create" className={currentRoute === '/create' ? 'active' : ''}>
        <IoMdAddCircle />
        Add Task
      </Link>
      <Link to="/home" className={currentRoute === '/home' ? 'active' : ''}>
        <AiFillHome /> Home
      </Link>
      <Link className={currentRoute === '/about' ? 'active' : ''} to="/about">
        <BsFillInfoSquareFill />
        About
      </Link>
    </S.Aside>
  );
}

export default Menu;
