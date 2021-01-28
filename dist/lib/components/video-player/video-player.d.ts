import { ReactNode, FC } from 'react';
import { ReactPlayerProps } from 'react-player/lazy';
interface VideoPlayerProps {
    className?: string;
    containerClassName?: string;
    placeholder?: () => ReactNode;
    url?: string;
    playing?: boolean;
    onClick?: () => void;
    ratio?: 'square' | 'wide';
    config?: any;
}
declare const VideoPlayer: FC<ReactPlayerProps & VideoPlayerProps>;
export default VideoPlayer;
