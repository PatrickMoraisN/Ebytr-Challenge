import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useHistory } from 'react-router';
import * as S from './style';

function NoTasks() {
  const history = useHistory();
  const handleClick = () => {
    window.location.reload();
  };
  const handleAddClick = () => {
    history.push('/create');
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
      <S.AddButton type="button" onClick={handleAddClick}>
        Add Tasks!
      </S.AddButton>
    </>
  );
}

export default NoTasks;
