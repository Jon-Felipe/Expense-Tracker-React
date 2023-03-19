import React from 'react';

type Props = {
  type: string;
  value: string;
  icon: React.ReactNode;
  typeColour?: string;
  bgColour?: string;
  valueColour?: string;
};

const AmountBlurb = ({
  type,
  value,
  icon,
  typeColour,
  bgColour,
  valueColour,
}: Props) => {
  return (
    <div
      className={`w-60 h-24 rounded-xl flex items-center justify-evenly gap-2 shadow ${
        bgColour ? bgColour : 'bg-white'
      }`}
    >
      <div className='p-1 bg-white rounded-lg'>{icon}</div>

      <div>
        <h3 className={`text-base font-bold tracking-wide ${typeColour}`}>
          {type}
        </h3>
        <p className={`text-3xl ${valueColour}`}>${value}</p>
      </div>
    </div>
  );
};

export default AmountBlurb;
