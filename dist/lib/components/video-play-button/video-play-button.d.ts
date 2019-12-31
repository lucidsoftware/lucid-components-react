import { FC } from 'react';
declare type Sizing = 'lg' | 'reg' | 'sm';
interface Props {
    size?: Sizing;
}
declare const VideoPlayButton: FC<JSX.IntrinsicElements['button'] & Props>;
export default VideoPlayButton;
