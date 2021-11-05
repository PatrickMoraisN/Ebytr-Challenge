import React from 'react';
import { useSelector } from 'react-redux';
import RadioBox from '../RadioBox';
import { RootState } from '../../redux/reducers';
import * as S from './style';

type SearchProps = {
  setTasks: (param: TaskProps[] | undefined) => void;
};

type EventChange = {
  target: HTMLInputElement;
};
type TaskProps = {
  _id: string;
  title: string;
  description: string;
  status: string;
  date: string;
};

function Search({ setTasks }: SearchProps) {
  const [type, setType] = React.useState('all');
  const [searchInput, setSearchInput] = React.useState('');

  const searchOnlyByTitle = (tasks: TaskProps[]) => {
    const filteredTasks = [...tasks].filter(({ title }) =>
      title.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    );
    setTasks(filteredTasks);
  };
  const { tasks } = useSelector((state: RootState) => state.TaskReducer);
  const handleSearch = () => {
    if (type === 'all') {
      searchOnlyByTitle(tasks);
    }
  };

  return (
    <S.SearchContainer>
      <input
        type="text"
        placeholder="Search a name"
        value={searchInput}
        onChange={({ target }: EventChange) => setSearchInput(target.value)}
      />
      <S.RadioBoxContainer>
        <S.RadioBox
          type="button"
          isActive={type === 'all'}
          onClick={() => setType('all')}
        >
          <span>All</span>
        </S.RadioBox>
        <RadioBox type={type} setType={setType} />
      </S.RadioBoxContainer>
      <S.SearchButton type="button" onClick={handleSearch}>
        Search
      </S.SearchButton>
    </S.SearchContainer>
  );
}

export default Search;
