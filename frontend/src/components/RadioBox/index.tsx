import React from 'react';
import * as S from './style';

type RadioBoxProps = {
  type: string;
  setType: (param: string) => void;
};
function RadioBox({ type, setType }: RadioBoxProps) {
  return (
    <>
      <S.RadioBox
        type="button"
        isActive={type === 'pending'}
        onClick={() => setType('pending')}
      >
        <span>Pending</span>
      </S.RadioBox>
      <S.RadioBox
        type="button"
        isActive={type === 'progress'}
        onClick={() => setType('progress')}
      >
        <span>In Progress</span>
      </S.RadioBox>
      <S.RadioBox
        type="button"
        isActive={type === 'done'}
        onClick={() => setType('done')}
      >
        <span>Done</span>
      </S.RadioBox>
    </>
  );
}

export default RadioBox;
