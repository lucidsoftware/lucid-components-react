import React from 'react';

type Props = {
  color?: string;
};

const play = ({ color }: Props) => {
  return (
    <svg height="100%" version="1.1" viewBox="0 0 9 10" width="100%">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M8.304688,5.402344 L0.695312,9.792969 C0.3125,10.015625 0,9.835938 0,9.390625 L0,0.605469 C0,0.164062 0.3125,-0.015625 0.695312,0.203125 L8.304688,4.597656 C8.6875,4.820312 8.6875,5.179688 8.304688,5.402344 Z"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default play;
