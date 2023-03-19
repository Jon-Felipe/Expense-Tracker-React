import React from 'react';

// components
import AmountBlurb from './AmountBlurb';

type Props = {};

const Amounts = (props: Props) => {
  return (
    <section className='flex items-center justify-between w-11/12 max-w-screen-lg mx-auto py-10'>
      <AmountBlurb />
      <AmountBlurb />
      <AmountBlurb />
    </section>
  );
};

export default Amounts;
