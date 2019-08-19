/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';
import { useState, ReactNode } from 'react';
import ReactPlayer from 'react-player'

import { withTheme } from 'emotion-theming';
import { ThemeInterface } from '../../../theme/theme';

import VideoPlayButton from '../video-play-button/video-play-button';

interface Props {
    className?: string;
    theme: ThemeInterface;
    placeholder?: () => ReactNode;
    url?: string;
    playing?: boolean;
    onClick?: () => void;
    ratio?: 'square' | 'wide'
}

const VideoPlayerBase = ({ className, url, placeholder, playing, onClick = () => {}, ratio = 'wide' }: Props) => {
    const [overlayVisible, setOverlayVisible] = useState(!playing);

    const videoContainerCss = css({
        display: 'block',
        padding: 0,
        width: '100%',
        position: 'relative',
        paddingTop: ratio === 'wide' ? '56.25%' : '100%'
    });
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
        background: rgba(0, 0, 0, .25);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    `;
    return (
        <div className={className} css={videoContainerCss}>
            { overlayVisible && <VideoOverlay>
                <VideoPlayButton onClick={() => {
                    if (url) {
                        setOverlayVisible(false);
                    }
                    onClick();
                }} />
            </VideoOverlay> }
            {placeholder && overlayVisible && <VideoPlaceholder>
                {placeholder()}
            </VideoPlaceholder> }
            {url && <ReactPlayer css={css({
                position: 'absolute',
                left: 0,
                right: 0
            })} className="react-player" height="100%" width="100%" url={url} playing={playing || !overlayVisible} />}
        </div>
    );
};

const VideoPlayer = withTheme(VideoPlayerBase);
export default VideoPlayer;
