/// <reference types="@emotion/core" />
/** @jsx jsx */
import { ReactNode } from 'react';
import { ThemeProps } from '../../../theme/theme';
interface Props {
    className?: string;
    children: ReactNode;
    isRaised?: boolean;
    noPadding?: boolean;
    as?: 'div' | 'section' | 'article';
}
declare const Paper: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props & ThemeProps, "theme">>;
export default Paper;
