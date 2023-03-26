import React from 'react';

type Props = {
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  name: string;
  value: string;
  handleOnChange: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input = ({ type, name, value, handleOnChange, placeholder }: Props) => {
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
        onChange={handleOnChange}
        placeholder={placeholder}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'
        required
      />
    </div>
  );
};

export default Input;
