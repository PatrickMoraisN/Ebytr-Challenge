import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import Menu from '../../components/Menu';
import * as S from './style';

function About() {
  return (
    <>
      <Menu />
      <S.Section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          similique ut soluta nemo nisi, qui quibusdam magni at obcaecati.
          Distinctio, provident rerum saepe accusamus voluptas dolorem dolore
          voluptate mollitia perspiciatis consequatur, assumenda cupiditate,
          quia odit nemo quam. Alias, libero accusantium!
        </p>
        <a
          href="https://github.com/patrickmoraisn"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare /> /patrickmoraisn
        </a>
      </S.Section>
    </>
  );
}

export default About;
