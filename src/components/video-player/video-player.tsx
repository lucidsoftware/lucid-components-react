import { css } from '@emotion/react';
import React, { useState, ReactNode, FC, useEffect } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy';
import styled from '@emotion/styled';

import VideoPlayButton from '../video-play-button/video-play-button';

const VideoPlaceholder = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 1,
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%'
  }
});

const VideoOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.35)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2
});

interface Props {
  className?: string;
  placeholder?: () => ReactNode;
  url?: string;
  shouldAutoPlay?: boolean;
  onClick?: () => void;
  ratio?: 'square' | 'wide';
  config?: any;
}

const VideoPlayer: FC<ReactPlayerProps & Props> = ({
  className,
  url,
  placeholder,
  shouldAutoPlay,
  onClick = () => {
    return;
  },
  ratio = 'wide',
  ...rest
}) => {
  const [overlayVisible, setOverlayVisible] = useState(!shouldAutoPlay);
  const [isPlaying, setIsPlaying] = useState(shouldAutoPlay);

  useEffect(() => {
    if (shouldAutoPlay) {
      setOverlayVisible(false);
      setIsPlaying(true);
    } else {
      setOverlayVisible(true);
      setIsPlaying(false);
    }
  }, [shouldAutoPlay]);

  const reactPlayerCss = css({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  });

  const videoContainerCss = css({
    display: 'block',
    padding: 0,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '5px',
    paddingTop: ratio === 'wide' ? '56.25%' : '100%'
  });

  return (
    /* eslint-disable-next-line react/jsx-sort-props */
    <div css={videoContainerCss} className={className}>
      {overlayVisible && (
        <VideoOverlay>
          <VideoPlayButton
            onClick={() => {
              if (url) {
                setOverlayVisible(false);
                setIsPlaying(true);
              }
              onClick();
            }}
            size="lg"
          />
        </VideoOverlay>
      )}
      {placeholder && overlayVisible && (
        <VideoPlaceholder>{placeholder()}</VideoPlaceholder>
      )}
      {url && (
        <ReactPlayer
          {...rest}
          css={reactPlayerCss}
          height="100%"
          playing={isPlaying}
          url={url}
          width="100%"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
