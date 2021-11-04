import React from 'react';
import Input from '../../components/Input';
import Menu from '../../components/Menu';
import * as S from './style';

function CreateTask() {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  // const [status, setStatus] = React.useState('');
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
          </S.InputsContainer>
          <S.ButtonsContainer>
            <button type="button">Cancel</button>
            <button type="button">Add Task</button>
          </S.ButtonsContainer>
        </S.FormContainer>
      </S.Section>
    </>
  );
}

export default CreateTask;
