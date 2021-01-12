import { ReactNode } from 'react';
import { TypographyProps, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import { VariantProps } from '../../../types';
declare type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface Props extends ColorProps, LayoutProps, SpaceProps, TypographyProps, VariantProps {
    as?: HeadingType;
    children: ReactNode;
}
declare const Heading: any;
export default Heading;
