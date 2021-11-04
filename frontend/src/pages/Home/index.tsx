import React from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import Menu from '../../components/Menu';
import * as S from './style';

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
      <S.TaskContainer>
        {tasks.map((task: TaskProps) => {
          const { _id } = task;
          return (
            <Link to={`/edit/${_id}`}>
              <p>{task.title}</p>
              <button type="button">Edit</button>
              <button type="button">Delete</button>
            </Link>
          );
        })}
      </S.TaskContainer>
      <S.Section>Home</S.Section>
    </div>
  );
}

export default Home;
