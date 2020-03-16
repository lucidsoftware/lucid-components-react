import { ReactNode } from 'react';
import { VariantProps } from '../../../types';
import { TypographyProps, SpaceProps, ColorProps } from 'styled-system';
declare type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface Props extends ColorProps, SpaceProps, TypographyProps, VariantProps {
    as?: HeadingType;
    children: ReactNode;
}
declare const Heading: import("@emotion/styled-base").StyledComponent<any, Props, object>;
export default Heading;
