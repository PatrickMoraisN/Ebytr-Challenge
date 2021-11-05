import styled from 'styled-components';

type RadioBoxProps = {
  isActive: boolean;
};

export const SearchContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: -10rem;
  height: 5rem;
  width: 100%;

  input,
  button {
    height: 2rem;
    border-radius: 6px;
    border: none;
  }
  input::placeholder {
    text-align: center;
  }
  input {
    width: 30rem;
  }
`;

export const RadioBoxContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 15px;
  top: -6rem;
  right: 20rem;
  height: 15rem;
  width: 10rem;
`;

export const SearchButton = styled.button`
  margin-left: 2rem;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  background: #d7d7d7;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3rem;
  padding: 0 2rem;
  border: 3px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => (props.isActive ? '#d7d7d7' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(0.9);
    background: #f7f7f7;
  }
`;
