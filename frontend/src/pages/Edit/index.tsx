import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import RadioBox from '../../components/RadioBox';
import { RootState } from '../../redux/reducers';
import { api } from '../../services/api';
import * as S from './style';
import { formatDatePT_BR } from '../../utils';

function Edit() {
  const [id] = React.useState(useHistory().location.pathname.split('/')[2]);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [status, setStatus] = React.useState('');
  const { tasks } = useSelector((state: RootState) => state.TaskReducer);

  const filteredTask = tasks.find(({ _id }: any) => _id === id);

  const history = useHistory();

  React.useEffect(() => {
    setTitle(filteredTask.title);
    setDescription(filteredTask.description);
    setStatus(filteredTask.status);
  }, []);

  const isAValidEdit = () => {
    if (
      title === filteredTask.title &&
      description === filteredTask.description &&
      status === filteredTask.status
    ) {
      toast.error('Invalid Task! Change something!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return false;
    }
    return true;
  };

  const handleEditTask = async () => {
    if (isAValidEdit()) {
      const unformatedDate = moment().format('l');
      const date = formatDatePT_BR(unformatedDate);
      await api.put('/edit', {
        id,
        title,
        description,
        status,
        date,
      });
      history.push('/home');
      window.location.reload();
    }
  };

  return (
    <>
      <Menu />
      <S.Section>
        <S.EditHeading>Edit your task!</S.EditHeading>
        <S.InputContainer>
          <Input
            placeholder="Add a Title"
            inputValue={title}
            setValue={setTitle}
          />
          <Input
            placeholder="Add a Desc"
            inputValue={description}
            setValue={setDescription}
          />
        </S.InputContainer>
        <S.RadioBoxContainer>
          <RadioBox type={status} setType={setStatus} />
        </S.RadioBoxContainer>
        <S.ButtonsContainer>
          <Link to="/home">
            <button type="button">Cancel</button>
          </Link>
          <button type="button" onClick={handleEditTask}>
            Edit Task
          </button>
        </S.ButtonsContainer>
      </S.Section>
    </>
  );
}

export default Edit;
