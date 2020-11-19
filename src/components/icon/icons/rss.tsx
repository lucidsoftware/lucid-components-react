import React from 'react';

type Props = {
  color?: string;
};

const rss = ({ color }: Props) => {
  return (
    <svg height="100%" version="1.1" viewBox="0 0 770.2 768.3" width="100%">
      <g>
        <path
          d="M0,256.1v128c0,0,143.7-4.9,255.1,95.8s127.6,213,129.6,288.3h129.4c0,0,0-159.6-84.1-279.5   C345.6,368.4,219.9,262,0,256.1z"
          fill={color}
        />
        <path
          d="M641.2,768.3h129c0,0-3.9-94.5-16.9-158.3c-13-63.9-44.7-209-194.2-371.4C408.5,75,178.5-2.5,0,0.1v129   c0,0,226.8-10.4,407.9,146S635.9,606.7,641.2,768.3z"
          fill={color}
        />
        <circle
          cx="128.1"
          cy="641.2"
          r="127.1"
          style={{ fill: color || 'currentColor' }}
        />
      </g>
    </svg>
  );
};

export default rss;
