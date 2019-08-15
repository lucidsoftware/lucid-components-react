/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';

interface Props {
    className?: string;
    theme: any;
    placeholder?: string;
    videoUrl?: string;
}

const VideoBase = ({ className }: Props) => {
    const videoCss = css({
    });
    const VideoContainer = styled('div')`
        display: flex;
        height: 100%;
        padding: 0;
    `;
    return (
        <VideoContainer className={className} css={videoCss}>
            
        </VideoContainer>
    );
};

const Video = withTheme(VideoBase);
export default Video;
