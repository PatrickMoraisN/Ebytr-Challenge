import React from 'react';
import Menu from '../../components/Menu';
import { api } from '../../services/api';
import * as S from './style';

function Home() {
  const getTasks = async () => {
    const data = await api.get('');
    console.log(data);
    return data;
  };
  React.useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      <Menu />
      <S.Section>Home</S.Section>
    </div>
  );
}

export default Home;
