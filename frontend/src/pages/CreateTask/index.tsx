import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import RadioBox from '../../components/RadioBox';
import { api } from '../../services/api';
import * as S from './style';
import { formatDatePT_BR } from '../../utils';

function CreateTask() {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('done');
  const history = useHistory();

  const handleAddTask = async () => {
    const unformatedDate = moment().format('l');
    const date = formatDatePT_BR(unformatedDate);
    if (!title || !description) {
      toast.error('Invalid Task! Type Something!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    await api.post('/create', { title, description, status, date });
    history.push('/home');
    window.location.reload();
  };

  return (
    <>
      <Menu />
      <S.Section>
        <S.Heading>Add A New Task!</S.Heading>
        <S.FormContainer>
          <S.InputsContainer>
            <Input
              placeholder="Add a Title"
              setValue={setTitle}
              inputValue={title}
            />
            <Input
              placeholder="Description"
              setValue={setDescription}
              inputValue={description}
            />
            <S.RadioBoxContainer>
              <RadioBox type={status} setType={setStatus} />
            </S.RadioBoxContainer>
          </S.InputsContainer>
          <S.ButtonsContainer>
            <Link to="/home">
              <button type="button">Cancel</button>
            </Link>
            <button type="button" onClick={handleAddTask}>
              Add Task
            </button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.Section>
    </>
  );
}

export default CreateTask;
