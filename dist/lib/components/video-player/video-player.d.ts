/// <reference types="@emotion/core" />
import { ReactNode } from 'react';
import { ReactPlayerProps } from 'react-player';
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    theme: ThemeInterface;
    placeholder?: () => ReactNode;
    url?: string;
    playing?: boolean;
    onClick?: () => void;
    ratio?: 'square' | 'wide';
    config?: any;
}
declare const VideoPlayer: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<ReactPlayerProps & Props>, "theme">>;
export default VideoPlayer;
