/** @jsx jsx */
import { ReactNode, FC } from 'react';
interface Props {
    as?: 'nav' | 'header' | 'div';
    skipText?: string;
    sticky?: boolean;
    stickyCollapsed?: boolean;
    background?: string;
    top?: number;
    zIndex?: number;
    children?: ReactNode;
}
declare const NavbarWrapper: FC<Props>;
export default NavbarWrapper;
