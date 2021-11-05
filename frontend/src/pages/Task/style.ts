import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  width: 50rem;
  margin-left: 40rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }
  .done {
    background: #96ff9f;
    padding: 0.5rem 1.8rem;
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

export const ReturnButton = styled.button`
  margin-top: 10rem;
  text-decoration: none;
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  background: #d6d6d6;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
