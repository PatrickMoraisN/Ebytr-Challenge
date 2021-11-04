import styled from 'styled-components';

export const EditButton = styled.button`
  padding: 0.5rem 1rem;
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  background: #6d6fc9;
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 15px;
  color: white;

  &:hover {
    filter: brightness(0.8);
  }
  svg {
    margin-left: 15px;
    font-size: 1.6rem;
  }
`;

export const OneTaskContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .done {
    background: #96ff9f;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }

  .pending {
    background: #e9fa87;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }

  .progress {
    background: #8f9eff;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }
`;

export const TextTask = styled.p`
  font-size: 3rem;
  width: 100%;
  display: block;
  transition: 0.3s;
  & + p {
    margin-top: 5rem;
  }
  &:hover {
    color: var(--purple);
  }
`;

export const TextButton = styled.p`
  font-size: 1.5rem;
  padding-right: 8px;
  border-right: 2px solid white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  width: 9.5rem;
  height: 3rem;
  border-radius: 5px;
  border: none;
  background: var(--red);
  display: flex;
  cursor: pointer;
  transition: 0.3s;
  margin-right: 15px;
  color: white;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-left: 8px;
    font-size: 1.6rem;
  }
`;

export const Status = styled.span`
  margin-right: 5rem;
`;
