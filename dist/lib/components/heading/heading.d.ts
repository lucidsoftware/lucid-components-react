import { ReactNode } from 'react';
import { VariantProps } from '../../../types';
import { TypographyProps, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
declare type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface Props extends ColorProps, LayoutProps, SpaceProps, TypographyProps, VariantProps {
    as?: HeadingType;
    children: ReactNode;
}
declare const Heading: import("@emotion/styled-base").StyledComponent<any, Props, import("../../../theme/theme").Theme>;
export default Heading;
