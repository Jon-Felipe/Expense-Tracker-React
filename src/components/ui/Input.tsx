import React from 'react';

type Props = {
  LabelText: string;
  type: React.HTMLInputTypeAttribute;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = ({ LabelText, type, name, value, onChange }: Props) => {
  return (
    <>
      <label htmlFor='' className='text-base font-semibold'>
        {LabelText}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='w-full border-2 px-4 py-2 rounded-lg'
      />
    </>
  );
};

export default Input;
