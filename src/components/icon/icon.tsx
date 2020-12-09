/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { css } from '@emotion/react';

import ArrowRight from './icons/arrow-right';
import CarotDown from './icons/carot-down';
import CarotRight from './icons/carot-right';
import Checkmark from './icons/checkmark';
import Play from './icons/play';
import RSS from './icons/rss';

export enum IconType {
  ArrowRight = 'ArrowRight',
  CarotRight = 'CarotRight',
  CarotDown = 'CarotDown',
  Checkmark = 'Checkmark',
  Play = 'Play',
  RSS = 'RSS'
}

type Flip = 'vertical' | 'horizontal' | 'both';
type Sizing = 'auto' | 'responsive';

export interface IconProps {
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

const Icon: FC<IconProps> = ({
  className,
  type,
  color,
  hoverColor,
  sizing = 'auto',
  flip
}) => {
  const isResponsiveSizing = sizing === 'responsive';
  const verticalAlign = isResponsiveSizing ? { verticalAlign: '-0.125em' } : {};
  const transform = getFlip(flip);

  const iconCss = css([
    verticalAlign,
    {
      display: 'inline-block',
      height: isResponsiveSizing ? '100%' : '1em',
      width: isResponsiveSizing ? '100%' : '1em',
      position: 'relative'
    },
    transform,
    {
      path: {
        fill: color ? color : 'currentColor'
      },
      '&:hover path': {
        fill: hoverColor ? hoverColor : ''
      }
    }
  ]);

  switch (type) {
    case IconType.ArrowRight:
      return (
        <span className={className} css={iconCss}>
          <ArrowRight color={color} />
        </span>
      );

    case IconType.CarotRight:
      return (
        <span className={className} css={iconCss}>
          <CarotRight color={color} />
        </span>
      );

    case IconType.CarotDown:
      return (
        <span className={className} css={iconCss}>
          <CarotDown color={color} />
        </span>
      );

    case IconType.Checkmark:
      return (
        <span className={className} css={iconCss}>
          <Checkmark color={color} />
        </span>
      );

    case IconType.Play:
      return (
        <span className={className} css={iconCss}>
          <Play color={color} />
        </span>
      );

    case IconType.RSS:
      return (
        <span className={className} css={iconCss}>
          <RSS color={color} />
        </span>
      );

    default:
      return <svg />;
  }
};

export default Icon;
