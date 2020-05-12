/** @jsx jsx */
import { ReactNode } from 'react';
import { SpaceProps, LayoutProps } from 'styled-system';
interface Props extends SpaceProps, LayoutProps {
    as?: 'div' | 'section' | 'article';
    children: ReactNode;
    variant?: string;
}
declare const Paper: ({ children, ...rest }: Props) => JSX.Element;
export default Paper;
