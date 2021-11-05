import React from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../services/api';
import Menu from '../../components/Menu';
import * as S from './style';
import Task from '../../components/Task';
import Search from '../../components/Search';
import { ADD_TASKS_ACTION } from '../../redux/actions';

type TaskProps = {
  _id: string;
  title: string;
  description: string;
  status: string;
  date: string;
};

function Home() {
  const [tasks, setTasks] = React.useState<TaskProps[] | any>([]);
  const dispatch = useDispatch();

  async function getAllTasks(): Promise<void> {
    const { data } = await api.get('/all');
    dispatch({
      type: ADD_TASKS_ACTION,
      payload: { tasks: data },
    });
    setTasks(data.allTasks.reverse());
  }

  React.useEffect(() => {
    getAllTasks();
  }, []);

  if (!tasks || tasks.length === 0) return <p>Add tasks!</p>;

  return (
    <>
      <Menu />
      <S.TasksContainer>
        <Search setTasks={setTasks} />
        {tasks.map((task: TaskProps) => {
          const { _id, title, status, date } = task;
          return <Task id={_id} title={title} status={status} date={date} />;
        })}
      </S.TasksContainer>
      <S.Section />
    </>
  );
}

export default Home;
