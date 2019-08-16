/** @jsx jsx */
import { ReactNode, SyntheticEvent } from 'react';
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
    title?: string;
    titleAs?: 'h1' | 'h2';
    thumbnail?: () => ReactNode;
    onClick?: (evt: SyntheticEvent) => {};
}
declare const Card: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<Props, "theme">>;
export default Card;
