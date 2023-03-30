import React from 'react';

type Props = {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string | number | readonly string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required: boolean;
};

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900 capitalize'
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
        required={required}
      />
    </div>
  );
};

export default Input;
