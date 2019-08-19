import { ReactNode } from 'react';
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    theme: ThemeInterface;
    placeholder?: () => ReactNode;
    url: string;
    playing?: boolean;
}
declare const Video: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Video;
