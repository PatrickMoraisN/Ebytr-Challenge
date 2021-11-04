import React from 'react';
import Modal from 'react-modal';
import * as S from './style';

type DeleteModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

function DeleteModal({ isOpen, onRequestClose }: DeleteModalProps) {
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
        <S.DeleteButton type="button">Delete</S.DeleteButton>
      </S.ButtonContainer>
    </Modal>
  );
}

export default DeleteModal;
