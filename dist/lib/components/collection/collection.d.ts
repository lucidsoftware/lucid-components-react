import React from 'react';
import { ThemeProps } from '../../../theme/theme';
export declare type Justify = 'start' | 'center' | 'end' | 'full';
export declare type Space = string | number | React.ReactText[] | Record<string | number | symbol, React.ReactText>;
export interface InnerCollectionProps {
    hSpace?: number;
    vSpace?: number;
    justify?: Justify;
}
export declare type CollectionProps = {
    className?: string;
    children: React.ReactNode;
    verticalJustify?: Justify;
} & ThemeProps & InnerCollectionProps;
declare const _default: React.FC<Pick<CollectionProps, "justify" | "children" | "className" | "hSpace" | "vSpace" | "verticalJustify"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
