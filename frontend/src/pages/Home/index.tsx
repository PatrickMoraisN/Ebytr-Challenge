import React from 'react';
import { api } from '../../services/api';
import Menu from '../../components/Menu';
import * as S from './style';
import Task from '../../components/Task';

type TaskProps = {
  _id: string;
  title: string;
  description: string;
  status: string;
  date: string;
};

function Home() {
  const [tasks, setTasks] = React.useState<TaskProps[] | any>([]);

  async function getAllTasks(): Promise<void> {
    const { data } = await api.get('/all');
    setTasks(data.allTasks);
  }

  React.useEffect(() => {
    getAllTasks();
  }, []);

  if (!tasks || tasks.length === 0) return <p>Add tasks!</p>;

  return (
    <div>
      <Menu />
      <S.TasksContainer>
        {tasks.map((task: TaskProps) => {
          const { _id, title, status } = task;
          return <Task id={_id} title={title} status={status} />;
        })}
      </S.TasksContainer>
      <S.Section>Home</S.Section>
    </div>
  );
}

export default Home;
