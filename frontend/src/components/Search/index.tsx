import React from 'react';
import RadioBox from '../RadioBox';
import * as S from './style';

type SearchProps = {
  setTasks: (param: string) => void;
};

function Search({ setTasks }: SearchProps) {
  const [type, setType] = React.useState('');
  return (
    <S.SearchContainer>
      <input type="text" placeholder="Search a name" />
      <S.RadioBoxContainer>
        <RadioBox type={type} setType={setType} />
      </S.RadioBoxContainer>
      <S.SearchButton type="button">Search</S.SearchButton>
    </S.SearchContainer>
  );
}

export default Search;
