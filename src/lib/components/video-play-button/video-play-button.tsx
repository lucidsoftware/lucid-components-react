/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import Icon, { IconType } from '../icon/icon';
import { ThemeInterface, ThemeProps } from '../../../theme/theme';
import { FC } from 'react';

type Sizing = 'lg' | 'reg';
interface Props {
    className?: string;
    onClick?: () => void;
    theme: ThemeInterface;
    size?: Sizing;
    css?: any
}

const VideoPlayButtonBase: FC<ThemeProps & JSX.IntrinsicElements['button'] & Props> = ({ className, css, size = 'reg', theme, onClick = () => {}, ...rest }) => {
    const sizePx = size === 'reg' ? '50px' : '80px';
    const sizePadding = size === 'reg' ? '15px' : '24px';
    const sizePosition = size === 'reg' ? '2px' : '4px';

    const PlayButton = styled('button')`
        display: flex;
        justify-content: center;
        align-items: center;
        height: ${sizePx};
        width: ${sizePx};
        padding: ${sizePadding};
        border-radius: 50%;
        border: 0;
        position: relative;
        background: #FFFFFF;
        cursor: pointer;
        box-shadow: 0 2px 4px 2px rgba(0,0,0,.2);
        transition: transform .15s ease-out;
        &:hover {
            transform: scale(1.1);
        }
    `;
    const IconContainer = styled('div')`
        position: relative;
        left: ${sizePosition};
    `;
    return (
        <PlayButton css={css} {...rest} className={className} onClick={() => onClick()}>
            <IconContainer>
                <Icon type={IconType.Play} color={theme.colors.primary} sizing="responsive" />
            </IconContainer>
        </PlayButton>
    );
};

const VideoPlayButton = withTheme(VideoPlayButtonBase);
export default VideoPlayButton;
