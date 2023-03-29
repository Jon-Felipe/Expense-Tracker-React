import React from 'react';

type Props = {
  name: string;
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: React.InputHTMLAttributes<HTMLInputElement>['required'];
};

const TextArea = ({ name, value, handleOnChange, required }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={handleOnChange}
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
        placeholder='Write your description here...'
        required={required}
      ></textarea>
    </div>
  );
};

export default TextArea;
