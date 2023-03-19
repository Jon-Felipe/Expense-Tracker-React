import React from 'react';

// components
import AmountBlurb from './AmountBlurb';

type Props = {};

const Amounts = (props: Props) => {
  return (
    <section className='flex items-center justify-between w-11/12 max-w-screen-lg mx-auto py-10'>
      <AmountBlurb type='Account Balance' value='9400' />
      <AmountBlurb type='Income' value='5000' />
      <AmountBlurb type='Expenses' value='1200' />
    </section>
  );
};

export default Amounts;
