import React from 'react';

type InputProps = {
  placeholder: string;
  setValue: (param: string) => void;
  inputValue: string;
};

type EventChange = {
  target: HTMLInputElement;
};

function Input({ placeholder, setValue, inputValue }: InputProps) {
  return (
    <>
      <input
        placeholder={placeholder}
        onChange={({ target }: EventChange) => setValue(target.value)}
        value={inputValue}
      />
    </>
  );
}

export default Input;
