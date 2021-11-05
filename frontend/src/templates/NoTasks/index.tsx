import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import * as S from './style';

function NoTasks() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <S.ButtonContainer>
        <RiErrorWarningFill />
      </S.ButtonContainer>
      <S.Section>Oops! There&apos;s nothing here!</S.Section>
      <S.ReturnButton type="button" onClick={handleClick}>
        Return
      </S.ReturnButton>
    </>
  );
}

export default NoTasks;
