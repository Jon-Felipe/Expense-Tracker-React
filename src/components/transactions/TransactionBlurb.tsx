import React from 'react';

type Props = {
  id: number;
  type: string;
  item: string;
  description: string;
  amount: number;
  time: string;
};

const TransactionBlurb = ({
  id,
  type,
  item,
  description,
  amount,
  time,
}: Props) => {
  return (
    <article className='flex items-center justify-between bg-white my-4 p-8 rounded-xl shadow'>
      <div>
        <h3>{item}</h3>
        <p>{description}</p>
      </div>

      <div>
        <p>${amount}</p>
        <p>{time}</p>
      </div>
    </article>
  );
};

export default TransactionBlurb;
