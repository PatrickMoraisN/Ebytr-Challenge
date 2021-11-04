import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import * as S from './style';
import DeleteModal from '../DeleteModal';

type TaskProps = {
  title: string;
  status: string;
  id: string;
};

function Task({ title, status, id }: TaskProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <S.OneTaskContainer>
      <Link to={`/edit/${id}`}>
        <S.TextTask>{title}</S.TextTask>
      </Link>
      <S.Status>{status}</S.Status>
      <S.ButtonsContainer>
        <S.EditButton type="button">
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