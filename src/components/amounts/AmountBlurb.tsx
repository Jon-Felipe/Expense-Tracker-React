import React from 'react';

type Props = {
  type: string;
  value: string;
};

const AmountBlurb = ({ type, value }: Props) => {
  return (
    <div className='bg-white w-60 h-28 rounded-xl flex flex-col items-center justify-center gap-2 shadow'>
      <h3 className='text-sm font-bold tracking-wide text-gray-400'>{type}</h3>
      <p className='text-2xl'>${value}</p>
    </div>
  );
};

export default AmountBlurb;
