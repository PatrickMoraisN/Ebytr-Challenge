import styled from 'styled-components';

export const Section = styled.section`
  margin-left: 14rem;
  padding: 8rem 15rem;
  font-size: 1.6rem;
  height: 90vh;

  a {
    display: flex;
    margin-left: 14rem;
    margin-top: 15rem;
    font-size: 3rem;
    color: var(--text-title);
    text-decoration: none;

    &:hover {
      filter: brightness(1.5);
    }

    svg {
      display: block;
      font-size: 4rem;
      margin-right: 2rem;
    }
  }
`;
