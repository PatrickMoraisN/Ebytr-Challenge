import React from 'react';
import Menu from '../../components/Menu';
import * as S from './style';

function NoTasks() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <S.Section>Oops! There&apos;s nothing here!</S.Section>
      <S.ReturnButton type="button" onClick={handleClick}>
        Return
      </S.ReturnButton>
    </>
  );
}

export default NoTasks;
