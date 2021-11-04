import axios from 'axios';
import React from 'react';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import * as S from './style';

type DeleteModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  id: string;
};

function DeleteModal({ isOpen, onRequestClose, id }: DeleteModalProps) {
  const history = useHistory();
  const handleDeleteTask = async () => {
    await axios.delete('http://localhost:3232/api/task/delete', {
      data: { id },
    });
    history.push('/home');
    window.location.reload();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" // Classe do overlay, tira do padrao vindo da biblioteca
      className="react-modal-content" // Classe do modal em si
    >
      <S.DeleteModalText>
        Are you sure you want to delete this task?
      </S.DeleteModalText>
      <S.ButtonContainer>
        <S.CancelButton type="button" onClick={onRequestClose}>
          Cancel
        </S.CancelButton>
        <S.DeleteButton type="button" onClick={handleDeleteTask}>
          Delete
        </S.DeleteButton>
      </S.ButtonContainer>
    </Modal>
  );
}

export default DeleteModal;
