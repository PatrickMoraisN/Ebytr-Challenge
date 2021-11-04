import styled from 'styled-components';

export const Aside = styled.aside`
  height: 100vh;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: 10rem;

  &::after {
    content: '';
    width: 3px;
    height: 80%;
    background-color: var(--text-title);
    left: 19rem;
    position: absolute;
  }

  a {
    font-size: 1.6rem;
    color: var(--text-title);
    text-decoration: none;
    font-weight: 400;
  }

  .active {
    color: var(--purple);
  }
`;
