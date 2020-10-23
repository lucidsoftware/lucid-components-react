import { ReactNode, FC } from 'react';
import { ReactPlayerProps } from 'react-player';
interface Props {
    className?: string;
    placeholder?: () => ReactNode;
    url?: string;
    playing?: boolean;
    onClick?: () => void;
    ratio?: 'square' | 'wide';
    config?: any;
}
declare const VideoPlayer: FC<ReactPlayerProps & Props>;
export default VideoPlayer;
