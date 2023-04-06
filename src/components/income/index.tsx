import React from 'react';

type Props = {};

const Income = (props: Props) => {
  return (
    <article>
      <h3>Insert Income Value</h3>
      <div>
        <h5>Income Name</h5>
        <input type='number' />
      </div>
      <div>
        <h5>Amount</h5>
        <input type='number' />
      </div>
      <button>Create Button</button>
    </article>
  );
};

export default Income;
