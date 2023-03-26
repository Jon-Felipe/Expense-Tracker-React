import React from 'react';

type Props = {
  name: string;
};

const RadioButton = ({ name }: Props) => {
  return (
    <div className='flex items-center pl-4 border border-gray-200 rounded'>
      <input
        id='default-radio-1'
        type='radio'
        value=''
        name='default-radio'
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300'
      />
      <label
        htmlFor='default-radio-1'
        className='w-full py-4 ml-2 text-sm font-medium text-gray-900'
      >
        {name}
      </label>
    </div>
  );
};

export default RadioButton;
