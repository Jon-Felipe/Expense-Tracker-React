import React from 'react';

type Props = {};

const Modal = (props: Props) => {
  return (
    <div className='w-screen h-screen bg-gray-200 fixed flex items-center justify-center'>
      {/* Container */}
      <div className='w-1/2 h-2/3 rounded-lg bg-white shadow flex flex-col p-6'>
        {/* Close Button */}
        <button> X </button>
        {/* Title */}
        <div>
          <h1>Add your transaction here</h1>
        </div>
        {/* Body */}
        <div></div>
        {/* Footer */}
        <div>
          <button>Cancel</button>
          <button>Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
