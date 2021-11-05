import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/reducers';
import Menu from '../../components/Menu';
import * as S from './style';

function index() {
  const [id] = React.useState(useHistory().location.pathname.split('/')[2]);

  const { tasks } = useSelector((state: RootState) => state.TaskReducer);
  const filteredTask = tasks.find(({ _id }: any) => _id === id);

  const handleClassStatus = (param: string) => {
    switch (param) {
      case 'done':
        return 'done';
      case 'progress':
        return 'progress';
      case 'pending':
        return 'pending';
      default:
        return '';
    }
  };

  return (
    <>
      <Menu />
      <S.Section>
        <h2>{filteredTask.title}</h2>
        <p>{filteredTask.description}</p>
        <p className={handleClassStatus(filteredTask.status)}>
          {filteredTask.status}
        </p>
        <p>{filteredTask.date}</p>
        <Link to="/home">
          <S.ReturnButton type="button">Return</S.ReturnButton>
        </Link>
      </S.Section>
    </>
  );
}

export default index;
