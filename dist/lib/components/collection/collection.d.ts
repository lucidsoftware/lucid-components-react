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
declare const _default: React.SFC<import("emotion-theming/types/helper").AddOptionalTo<CollectionProps, "theme">>;
export default _default;
