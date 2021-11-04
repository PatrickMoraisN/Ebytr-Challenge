import styled from 'styled-components';

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CancelButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  border: none;
  background: #d6d6d6;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const DeleteButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  border: none;
  background: #fa4848;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const DeleteModalText = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
