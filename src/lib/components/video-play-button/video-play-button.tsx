/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import Icon, { IconType } from '../icon/icon';
import { ThemeInterface, ThemeProps } from '../../../theme/theme';
import { FC } from 'react';

interface Props {
    className?: string;
    onClick?: () => void;
    theme: ThemeInterface;
    css?: any
}

const VideoPlayButtonBase: FC<ThemeProps & JSX.IntrinsicElements['button'] & Props> = ({ className, css, theme, onClick = () => {}, ...rest }) => {
    const PlayButton = styled('button')`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 50px;
        padding: 15px;
        border-radius: 50%;
        border: 0;
        position: relative;
        background: #FFFFFF;
        cursor: pointer;
        box-shadow: 0px 2px 3px rgba(0, 0, 0, .15);
        transition: transform .15s ease-out;
        &:hover {
            transform: scale(1.1);
        }
    `;
    const IconContainer = styled('div')`
        position: relative;
        left: 2px;
    `;
    return (
        <PlayButton css={css} {...rest} className={className} onClick={() => onClick()}>
            <IconContainer>
                <Icon type={IconType.Play} color={theme.colors.primary} />
            </IconContainer>
        </PlayButton>
    );
};

const VideoPlayButton = withTheme(VideoPlayButtonBase);
export default VideoPlayButton;
