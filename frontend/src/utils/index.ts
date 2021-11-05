export const formatDatePT_BR = (date: string) => {
  const dateArray = date.split('/');
  const formatedDate = `${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`;
  return formatedDate;
};
