import React, { FC } from 'react';
import { useTheme } from '@emotion/react';

import Icon, { IconType } from '../icon/icon';
import styled from '../../../theme/styled';
import { Theme } from '../../../theme/theme';

type Sizing = 'lg' | 'reg' | 'sm';

interface Props {
  size?: Sizing;
}

const PlayButton = styled.button<{ sizePx: string; sizePadding: string }>(
  ({ sizePx, sizePadding }: { sizePx: string; sizePadding: string }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: sizePx,
    width: sizePx,
    padding: sizePadding,
    borderRadius: '50%',
    border: 0,
    position: 'relative',
    background: '#ffffff',
    cursor: 'pointer',
    boxShadow: '0 2px 4px 2px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.15s ease-out',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  })
);

const IconContainer = styled.div<{
  sizePositionHorz: string;
  sizePositionVert: string;
}>(
  ({
    sizePositionHorz,
    sizePositionVert
  }: {
    sizePositionHorz: string;
    sizePositionVert: string;
  }) => ({
    position: 'relative',
    left: sizePositionHorz,
    top: sizePositionVert
  })
);

const VideoPlayButton: FC<JSX.IntrinsicElements['button'] & Props> = ({
  size = 'reg',
  ...rest
}) => {
  let sizePx = '50px';
  let sizePadding = '15px';
  let sizePositionHorz = '2px';
  let sizePositionVert = '0';

  if (size === 'lg') {
    sizePx = '80px';
    sizePadding = '24px';
    sizePositionHorz = '5px';
    sizePositionVert = '-1px';
  }

  if (size === 'sm') {
    sizePx = '40px';
    sizePadding = '12px';
    sizePositionHorz = '3px';
  }
  // @ts-ignore
  const theme = useTheme<Theme>();

  return (
    <PlayButton sizePadding={sizePadding} sizePx={sizePx} {...rest}>
      <IconContainer
        sizePositionHorz={sizePositionHorz}
        sizePositionVert={sizePositionVert}
      >
        <Icon
          // @ts-ignore
          color={theme.colors.primary}
          sizing="responsive"
          type={IconType.Play}
        />
      </IconContainer>
    </PlayButton>
  );
};

export default VideoPlayButton;
