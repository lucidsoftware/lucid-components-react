/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    children: ReactNode;
    isRaised?: boolean;
    removePadding?: boolean;
    as?: 'div' | 'section' | 'article';
    theme: ThemeInterface;
}
declare const Paper: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Paper;
