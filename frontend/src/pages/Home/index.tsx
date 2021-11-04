import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
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
      <S.TasksContainer>
        {tasks.map((task: TaskProps) => {
          const { _id } = task;
          return (
            <S.OneTaskContainer>
              <Link to={`/edit/${_id}`}>
                <S.TextTask>{task.title}</S.TextTask>
              </Link>
              <S.ButtonsContainer>
                <S.EditButton type="button">
                  <S.TextButton>Edit</S.TextButton>
                  <FaEdit />
                </S.EditButton>
                <S.DeleteButton type="button">
                  <S.TextButton>Delete</S.TextButton>
                  <AiFillDelete />
                </S.DeleteButton>
              </S.ButtonsContainer>
            </S.OneTaskContainer>
          );
        })}
      </S.TasksContainer>
      <S.Section>Home</S.Section>
    </div>
  );
}

export default Home;
