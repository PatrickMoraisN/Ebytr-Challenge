import * as S from './style';

function Loading() {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <S.Section>Loading...</S.Section>
    </>
  );
}

export default Loading;
