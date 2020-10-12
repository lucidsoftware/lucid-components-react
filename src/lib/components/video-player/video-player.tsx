/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, ReactNode, FC, useEffect } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

import VideoPlayButton from '../video-play-button/video-play-button';
import styled from '../../../theme/styled';

const VideoPlaceholder = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const VideoOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

interface Props {
  className?: string;
  placeholder?: () => ReactNode;
  url?: string;
  playing?: boolean;
  onClick?: () => void;
  ratio?: 'square' | 'wide';
  config?: any;
}

const VideoPlayer: FC<ReactPlayerProps & Props> = ({
  className,
  url,
  placeholder,
  playing,
  onClick = () => {
    return;
  },
  ratio = 'wide',
  ...rest
}) => {
  const [overlayVisible, setOverlayVisible] = useState(!playing);
  const [isPlaying, setIsPlaying] = useState(playing);

  useEffect(() => {
    if (playing) {
      setOverlayVisible(false);
      setIsPlaying(true);
    } else {
      setOverlayVisible(true);
      setIsPlaying(false)
    }
  }, [playing]);

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
    <div className={className} css={videoContainerCss}>
      {overlayVisible && (
        <VideoOverlay>
          <VideoPlayButton
            size="lg"
            onClick={() => {
              if (url) {
                setOverlayVisible(false);
                setIsPlaying(true);
              }
              onClick();
            }}
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
          width="100%"
          url={url}
          playing={isPlaying}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
