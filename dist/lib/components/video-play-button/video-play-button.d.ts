/// <reference types="react" />
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    onClick?: () => void;
    theme: ThemeInterface;
}
declare const VideoPlayButton: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default VideoPlayButton;
