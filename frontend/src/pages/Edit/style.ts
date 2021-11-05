import styled from 'styled-components';

export const Section = styled.section`
  margin-left: 20rem;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RadioBoxContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30rem;
  width: 30rem;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 10px;
  top: 13rem;

  input {
    width: 30rem;
    height: 3.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1.7rem;
  }
  input:focus {
    background: #e3e3e3;
    outline: none;
  }
  input::placeholder {
    text-align: center;
    color: var(--purple);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13rem;

  button:first-child {
    background: #d6d6d6;
    padding: 0.8rem 1.8rem;
    border-radius: 5px;
    border: none;
    transition: 0.3s;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }

  button:nth-child(2) {
    background: #9bff94;
    padding: 0.8rem 1.8rem;
    border-radius: 5px;
    border: none;
    transition: 0.3s;
    color: black;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    filter: brightness(0.8);
  }
`;

export const EditHeading = styled.h2`
  font-size: 3rem;
  margin-top: 6rem;
`;
