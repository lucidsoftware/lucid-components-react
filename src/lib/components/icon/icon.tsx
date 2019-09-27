/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export enum IconType {
  ArrowRight,
  CarotRight,
  CarotDown,
  Checkmark,
  Play,
  RSS
}

type Flip = 'vertical' | 'horizontal' | 'both';
type Sizing = 'auto' | 'responsive';

interface Props {
  className?: string;
  type: IconType;
  color?: string;
  hoverColor?: string;
  flip?: Flip;
  rotation?: number;
  sizing?: Sizing;
}

const getFlip = (flip?: Flip) => {
  if (!flip) {
    return {};
  }

  let scale;
  switch (flip) {
    case 'horizontal':
      scale = 'scaleX(-1)';
      break;
    case 'vertical':
      scale = 'scaleY(-1)';
      break;
    case 'both':
      scale = 'scale(-1, -1)';
      break;
  }
  return {
    transform: scale
  };
};

const Icon = ({
  className,
  type,
  color,
  hoverColor,
  sizing = 'auto',
  flip
}: Props) => {
  const isResponsiveSizing = sizing === 'responsive';
  const verticalAlign = isResponsiveSizing ? { verticalAlign: '-.125em' } : {};
  const transform = getFlip(flip);

  const iconCss = css({
    ...verticalAlign,
    display: 'inline-block',
    height: isResponsiveSizing ? '100%' : '1em',
    width: isResponsiveSizing ? '100%' : '1em',
    position: 'relative',
    ...transform,
    path: {
      fill: color ? color : `currentColor`
    },
    '&:hover path': {
      fill: hoverColor ? hoverColor : ''
    }
  });

  let icon;

  switch (type) {
    case IconType.ArrowRight:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 12 10" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M11.707031,5.707031 L7.707031,9.707031 C7.511719,9.902344 7.257812,10.0000002 7,10.0000002 C6.742188,10.0000002 6.488281,9.902344 6.292969,9.707031 C5.902344,9.316406 5.902344,8.683594 6.292969,8.292969 L8.585938,6.00000025 L1,6.00000025 C0.449219,6.00000025 0,5.554688 0,5.00000025 C0,4.445312 0.449219,4.00000025 1,4.00000025 L8.585938,4.00000025 L6.292969,1.707031 C5.902344,1.316406 5.902344,0.683594 6.292969,0.292969 C6.683594,-0.097656 7.316406,-0.097656 7.707031,0.292969 L11.707031,4.292969 C12.097656,4.683594 12.097656,5.316406 11.707031,5.707031 Z"
              fill={color}
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
      break;
    case IconType.CarotRight:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 12 22" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-1.000000, -1.000000)"
              fill={color}
              fillRule="nonzero"
            >
              <path d="M1.992188,0.992188 C1.582031,0.992188 1.21875,1.238281 1.0625,1.613281 C0.910156,1.992188 1,2.421875 1.292969,2.707031 L10.585938,12 L1.292969,21.292969 C1.03125,21.542969 0.925781,21.917969 1.019531,22.265625 C1.109375,22.617188 1.382812,22.890625 1.734375,22.980469 C2.082031,23.074219 2.457031,22.96875 2.707031,22.707031 L12.707031,12.707031 C13.097656,12.316406 13.097656,11.683594 12.707031,11.292969 L2.707031,1.292969 C2.519531,1.097656 2.261719,0.992188 1.992188,0.992188 Z" />
            </g>
          </g>
        </svg>
      );
      break;
    case IconType.CarotDown:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 22 12" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g
              transform="translate(-1.000000, -1.000000)"
              fill={color}
              fillRule="nonzero"
            >
              <path
                d="M6.992188,-4.007812 C6.582031,-4.007812 6.21875,-3.761719 6.0625,-3.386719 C5.910156,-3.007812 6,-2.578125 6.292969,-2.292969 L15.585938,7 L6.292969,16.292969 C6.03125,16.542969 5.925781,16.917969 6.019531,17.265625 C6.109375,17.617188 6.382812,17.890625 6.734375,17.980469 C7.082031,18.074219 7.457031,17.96875 7.707031,17.707031 L17.707031,7.707031 C18.097656,7.316406 18.097656,6.683594 17.707031,6.292969 L7.707031,-3.707031 C7.519531,-3.902344 7.261719,-4.007812 6.992188,-4.007812 Z"
                transform="translate(11.992930, 7.003164) rotate(-270.000000) translate(-11.992930, -7.003164) "
              />
            </g>
          </g>
        </svg>
      );
      break;
    case IconType.Checkmark:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 13 10" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M12.707031,1.707031 L5.148438,9.265625 C4.960938,9.453125 4.703125,9.558594 4.441406,9.558594 C4.175781,9.558594 3.921875,9.453125 3.734375,9.265625 L0.28125,5.8125 C-0.109375,5.421875 -0.109375,4.789062 0.28125,4.398438 C0.671875,4.007812 1.304688,4.007812 1.695312,4.398438 L4.441406,7.144531 L11.292969,0.292969 C11.683594,-0.097656 12.316406,-0.097656 12.707031,0.292969 C13.097656,0.683594 13.097656,1.316406 12.707031,1.707031 Z"
              fill={color}
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
      break;
    case IconType.Play:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 9 10" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M8.304688,5.402344 L0.695312,9.792969 C0.3125,10.015625 0,9.835938 0,9.390625 L0,0.605469 C0,0.164062 0.3125,-0.015625 0.695312,0.203125 L8.304688,4.597656 C8.6875,4.820312 8.6875,5.179688 8.304688,5.402344 Z"
              fill={color}
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
      break;
    case IconType.RSS:
      icon = (
        <svg width="100%" height="100%" viewBox="0 0 40 40" version="1.1">
          <circle cx="12" cy="28" r="3" fill="white" />
          <path
            d="M23.9924 31H19.6209C19.2022 22.6222 12.3248 20.4251 9 20.3737V16C10.9087 16 15.2802 16.1848 19.7748 20.5277C23.3706 24.0021 24.0848 28.9569 23.9924 31Z"
            fill="white"
          />
          <path
            d="M32 31H27.3501C27.0692 18.2624 16.209 12.2849 9 12.6291V8.0286C11.2469 7.84082 19.3083 8.40415 25.54 15.0702C31.6255 21.5798 32 28.7467 32 31Z"
            fill="white"
          />
        </svg>
      );
      break;
    default:
      icon = <svg />;
      break;
  }

  return (
    <div css={iconCss} className={className}>
      {icon}
    </div>
  );
};

export default Icon;
