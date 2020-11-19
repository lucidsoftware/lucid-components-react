import React from 'react';

type Props = {
  color?: string;
};

const checkmark = ({ color }: Props) => {
  return (
    <svg height="100%" version="1.1" viewBox="0 0 13 10" width="100%">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M12.707031,1.707031 L5.148438,9.265625 C4.960938,9.453125 4.703125,9.558594 4.441406,9.558594 C4.175781,9.558594 3.921875,9.453125 3.734375,9.265625 L0.28125,5.8125 C-0.109375,5.421875 -0.109375,4.789062 0.28125,4.398438 C0.671875,4.007812 1.304688,4.007812 1.695312,4.398438 L4.441406,7.144531 L11.292969,0.292969 C11.683594,-0.097656 12.316406,-0.097656 12.707031,0.292969 C13.097656,0.683594 13.097656,1.316406 12.707031,1.707031 Z"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default checkmark;
