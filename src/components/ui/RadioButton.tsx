import React from 'react';

type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const RadioButton = ({ name, value, text, onChange }: Props) => {
  return (
    <div className='flex items-center pl-4 border border-gray-200 rounded'>
      <input
        type='radio'
        name={name}
        value={value}
        onChange={onChange}
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
      />
      <label
        htmlFor={name}
        className='w-full py-4 ml-2 text-sm font-medium text-gray-900'
      >
        {text}
      </label>
    </div>
  );
};

export default RadioButton;
