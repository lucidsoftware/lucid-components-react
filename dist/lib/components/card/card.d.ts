/** @jsx jsx */
import { ReactNode } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'article';
    isRaised?: boolean;
    isInteractive?: boolean;
    theme: any;
    thumbnail?: string | JSX.Element;
    title?: string;
    subtitle?: string;
    subtitleAbove?: boolean;
    titleAs?: 'h1' | 'h2';
    href?: string;
    actions?: ReactNode[];
    horizontal?: boolean;
}
declare const Card: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Card;
