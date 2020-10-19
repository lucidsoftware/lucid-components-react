/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { useTheme } from 'emotion-theming';

import Icon, { IconType } from '../icon/icon';
import styled from '../../../theme/styled';

type Sizing = 'lg' | 'reg' | 'sm';
interface Props {
  size?: Sizing;
}

const PlayButton = styled.button<{ sizePx: string; sizePadding: string }>(
  ({ sizePx, sizePadding }) => ({
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
}>(({ sizePositionHorz, sizePositionVert }) => ({
  position: 'relative',
  left: sizePositionHorz,
  top: sizePositionVert
}));

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
  } else if (size === 'sm') {
    sizePx = '40px';
    sizePadding = '12px';
    sizePositionHorz = '3px';
  }

  const theme = useTheme<any>();

  return (
    <PlayButton sizePadding={sizePadding} sizePx={sizePx} {...rest}>
      <IconContainer
        sizePositionHorz={sizePositionHorz}
        sizePositionVert={sizePositionVert}
      >
        <Icon
          color={theme.colors.primary}
          sizing="responsive"
          type={IconType.Play}
        />
      </IconContainer>
    </PlayButton>
  );
};

export default VideoPlayButton;
