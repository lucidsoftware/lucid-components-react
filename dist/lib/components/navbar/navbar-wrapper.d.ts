/** @jsx jsx */
import { ReactNode, FC } from 'react';
interface Props {
    as?: 'nav' | 'header' | 'div';
    skipText?: string;
    sticky?: boolean;
    stickyCollapsed?: boolean;
    background?: string;
    children?: ReactNode;
}
declare const NavbarWrapper: FC<HTMLDivElement & Props>;
export default NavbarWrapper;
