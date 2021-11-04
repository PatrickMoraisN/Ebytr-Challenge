import styled from 'styled-components';

export const SectionContainer = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
`;

export const LeftContainer = styled.div`
  width: 70%;
  position: absolute;
  left: -14rem;
  bottom: 0;
  z-index: 3;
  top: 0;
  background: var(--text-title);
  -ms-transform: skewx(20deg);
  -webkit-transform: skewx(20deg);
  transform: skewx(20deg);

  h2 {
    color: var(--background);
    -ms-transform: skewx(-20deg);
    -webkit-transform: skewx(-20deg);
    position: absolute;
    z-index: 4;
    font-size: 5rem;
    right: 20rem;
    top: 18rem;
    transform: translateY(-50%), skewx(-20deg);
  }

  h3 {
    color: #e61919;
    -ms-transform: skewx(-20deg);
    -webkit-transform: skewx(-20deg);
    position: absolute;
    z-index: 4;
    font-size: 5rem;
    right: 20rem;
    top: 60%;
    transform: translateY(-50%), skewx(-20deg);
  }
`;

export const RightContainer = styled.div`
  width: 50%;
  background: var(--background);
  position: absolute;
  z-index: 1;
  right: 0;

  h1 {
    color: var(--text-title);
    position: absolute;
    z-index: 2;
    right: 20%;
    top: 14rem;
    transform: translateX(-20%);
    font-size: 8rem;
    color: var(--purple);

    &::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 0;
      right: 0;
      height: 4px;
      border-radius: 5px;
      background: var(--purple);
    }
  }

  a {
    color: var(--background);
    position: absolute;
    z-index: 2;
    right: 32%;
    top: 37rem;
    font-size: 2rem;
    display: block;
    text-decoration: none;
    padding: 6px 12px;
    background: var(--text-title);
    border-radius: 6px;
    transition: 0.3s;

    &:hover {
      filter: brightness(1.5);
    }
  }
`;
