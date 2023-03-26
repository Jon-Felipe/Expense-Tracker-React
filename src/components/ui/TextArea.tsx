import React from 'react';

type Props = {};

const TextArea = (props: Props) => {
  return (
    <div>
      <label
        htmlFor='description'
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        Description
      </label>
      <textarea
        name='description'
        id='description'
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
        placeholder='Write your description here...'
      ></textarea>
    </div>
  );
};

export default TextArea;
