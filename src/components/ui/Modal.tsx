import React from 'react';

type Props = {};

const Modal = (props: Props) => {
  return (
    <div>
      {/* Container */}
      <div>
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
