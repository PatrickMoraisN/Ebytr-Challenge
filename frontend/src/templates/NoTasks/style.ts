import styled from 'styled-components';

export const Section = styled.section`
  position: absolute;
  left: 40rem;
  top: 20rem;
  font-size: 3rem;
`;

export const ReturnButton = styled.button`
  position: absolute;
  padding: 1.5rem 3rem;
  left: 53rem;
  top: 30rem;
  border-radius: 6px;
  border: none;
  background: var(--text-title);
  color: var(--white);
  cursor: pointer;
  font-size: 2rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 53rem;
  top: 8rem;

  svg {
    font-size: 10rem;
  }
`;
