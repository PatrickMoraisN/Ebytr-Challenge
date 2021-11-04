import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function Login() {
  return (
    <S.SectionContainer>
      <S.LeftContainer>
        <h2>Its about Time!</h2>
        <h3>Don&apos;t waste it.</h3>
      </S.LeftContainer>
      <S.RightContainer>
        <h1>Ebytr</h1>
        <Link to="/home">Try out now!</Link>
      </S.RightContainer>
    </S.SectionContainer>
  );
}

export default Login;
