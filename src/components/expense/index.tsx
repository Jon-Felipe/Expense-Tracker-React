import React from 'react';

type Props = {};

const Expense = (props: Props) => {
  return (
    <article>
      <h3>Add New Expense</h3>
      <div>
        <div>
          <h5>Expense Name</h5>
          <input type='text' />
        </div>
        <div>
          <h5>Amount</h5>
          <input type='number' />
        </div>
      </div>
      <div>
        <h5>Budget Category</h5>
        <input type='string' />
      </div>
      <button>Create Button</button>
    </article>
  );
};

export default Expense;
