import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Menu from '../../components/Menu';
import { RootState } from '../../redux/reducers';

type TaskProps = {
  _id: string;
  title: string;
  description: string;
  status: string;
  date: string;
};

function Edit() {
  // const [teste, setTeste] = React.useState('');
  const [id, setId] = React.useState(
    useHistory().location.pathname.split('/')[2]
  );
  const { tasks } = useSelector((state: RootState) => state.TaskReducer);
  // React.useEffect(() => {
  //   setTeste(result);
  // }, []);
  const filteredTask = tasks.find(({ _id }: any) => _id === id);
  // console.log(result.tasks);

  return (
    <div>
      <Menu />
      Edit
    </div>
  );
}

export default Edit;
