/** @jsx jsx */
import { ReactNode } from 'react';
interface Props {
    className?: string;
    children: ReactNode;
    isRaised?: boolean;
    noPadding?: boolean;
    as?: 'div' | 'section' | 'article';
}
declare const Paper: ({ children, ...rest }: Props) => JSX.Element;
export default Paper;
