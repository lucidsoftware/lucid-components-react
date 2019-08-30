/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';

import { withTheme } from 'emotion-theming';
import Icon, { IconType } from '../icon/icon';
import { ThemeInterface, ThemeProps } from '../../../theme/theme';
import { FC } from 'react';

type Sizing = 'lg' | 'reg' | 'sm';
interface Props {
    className?: string;
    onClick?: () => void;
    theme: ThemeInterface;
    size?: Sizing;
    css?: any
}

const VideoPlayButtonBase: FC<ThemeProps & JSX.IntrinsicElements['button'] & Props> = ({ className, css, size = 'reg', theme, onClick = () => {}, ...rest }) => {
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
        left: ${sizePositionHorz};
        top: ${sizePositionVert};
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
