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
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      height: 3px;
      background: red;
      width: 0;
      transition: 0.2s;
    }

    &:hover::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: var(--purple);
      border-radius: 6px;
    }

    svg {
      margin-right: 10px;
    }
  }

  .active {
    color: var(--purple);
  }
`;

export const Heading = styled.h2`
  font-size: 3rem;
  color: var(--text-title);
`;
