import { ReactNode, FC, HTMLAttributes } from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
interface Props extends SpaceProps, LayoutProps {
    as?: 'div' | 'section' | 'article';
    children: ReactNode;
    variant?: string;
}
declare const Paper: FC<HTMLAttributes<HTMLDivElement> & Props>;
export default Paper;
