import styled from 'styled-components';

export const Section = styled.section`
  margin-left: 19rem;
`;

export const TaskContainer = styled.div`
  left: 50rem;
  top: 10rem;
  position: absolute;

  a {
    display: block;
    width: 40rem;
    height: 6rem;
    color: var(--title-text);
    text-decoration: none;
    display: flex;
    gap: 5rem;
    justify-content: space-around;
    align-items: center;

    p {
      font-size: 3rem;
      display: block;

      & + p {
        margin-top: 5rem;
      }
    }
  }
`;
