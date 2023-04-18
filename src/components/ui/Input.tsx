import React from 'react';

type Props = {
  LabelText: string;
  type: React.HTMLInputTypeAttribute;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  placeholder: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  required: boolean | undefined;
};

const Input = ({
  LabelText,
  type,
  name,
  value,
  placeholder,
  onChange,
  required,
}: Props) => {
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
        placeholder={placeholder}
        className='w-full border-2 px-4 py-2 rounded-lg'
        required={required}
      />
    </>
  );
};

export default Input;
