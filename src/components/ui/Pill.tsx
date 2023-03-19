import React from 'react';

type Props = {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick: () => void;
  bgColour: string;
  textColour: string;
  text: string;
};

const Pill = ({ type, onClick, bgColour, textColour, text }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl shadow ${bgColour} ${textColour} font-bold tracking-wide`}
    >
      {text}
    </button>
  );
};

export default Pill;
