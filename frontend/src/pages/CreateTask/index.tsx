import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useHistory } from 'react-router';
import axios from 'axios';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import RadioBox from '../../components/RadioBox';
import { api } from '../../services/api';
import * as S from './style';

function CreateTask() {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [status, setStatus] = React.useState<string>('done');
  const history = useHistory();

  const formatDatePT_BR = (date: string) => {
    const dateArray = date.split('/');
    const formatedDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
    return formatedDate;
  };

  const handleAddTask = async () => {
    const unformatedDate = moment().format('l');
    const date = formatDatePT_BR(unformatedDate);
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
