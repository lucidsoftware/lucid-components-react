/** @jsx jsx */
import { ReactNode } from 'react';
interface Props {
    actions?: ReactNode[];
    as?: 'div' | 'section' | 'article';
    children?: ReactNode;
    className?: string;
    horizontal?: boolean;
    href?: string;
    isInteractive?: boolean;
    isRaised?: boolean;
    noPadding?: boolean;
    subtitle?: string;
    subtitleAbove?: boolean;
    theme: any;
    thumbnail?: string | JSX.Element | ReactNode;
    title?: string;
    titleAs?: 'h1' | 'h2';
}
declare const Card: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Card;
