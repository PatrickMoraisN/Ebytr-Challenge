import styled from 'styled-components';

type RadioBoxProps = {
  isActive: boolean;
};

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
  transition: 0.2s;
  &:hover {
    filter: brightness(0.9);
    background: #f7f7f7;
  }
`;
