import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { useHistory } from 'react-router';
import * as S from './style';
import DeleteModal from '../DeleteModal';

type TaskProps = {
  title: string;
  status: string;
  id: string;
  date: string;
};

function Task({ title, status, id, date }: TaskProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const history = useHistory();

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleClassStatus = (param: string) => {
    switch (param) {
      case 'done':
        return 'done';
      case 'progress':
        return 'progress';
      case 'pending':
        return 'pending';
      default:
        return '';
    }
  };

  const handleEditTask = () => {
    history.push(`/edit/${id}`);
  };

  return (
    <S.OneTaskContainer>
      <Link to={`/task/${id}`}>
        <S.TextTask>{title}</S.TextTask>
      </Link>
      <S.Status className={handleClassStatus(status)}>{status}</S.Status>
      <S.Date>({date})</S.Date>
      <S.ButtonsContainer>
        <S.EditButton type="button" onClick={handleEditTask}>
          <S.TextButton>Edit</S.TextButton>
          <FaEdit />
        </S.EditButton>
        <S.DeleteButton type="button" onClick={handleOpenDeleteModal}>
          <S.TextButton>Delete</S.TextButton>
          <AiFillDelete />
        </S.DeleteButton>
      </S.ButtonsContainer>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={handleCloseDeleteModal}
        id={id}
      />
    </S.OneTaskContainer>
  );
}

export default Task;
