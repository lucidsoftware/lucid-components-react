/// <reference types="@emotion/core" />
/** @jsx jsx */
import { RefAttributes, AnchorHTMLAttributes } from 'react';
import { ThemeProps } from '../../../theme/theme';
export declare type UnderlineType = 'none' | 'hover' | 'always';
export interface CoreLinkProps {
    active?: boolean;
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;
    asButton?: boolean;
    block?: boolean;
    underline?: UnderlineType;
    css?: any;
}
export declare type LinkProps = ThemeProps & AnchorHTMLAttributes<HTMLAnchorElement> & RefAttributes<HTMLAnchorElement> & CoreLinkProps;
export declare enum LinkVariant {
    Default = "default",
    Primary = "primary",
    Secondary = "secondary"
}
export declare const getLinkStyles: ({ active, block, inverse, theme, underline, variant }: {
    active?: boolean;
    block?: boolean;
    inverse?: boolean;
    underline?: string;
    variant?: LinkVariant;
} & ThemeProps) => {
    color: string;
    display: string;
    border: string;
    fontSize: string;
    textDecoration: string;
    cursor: string;
    ':visited': {
        color: string;
    };
    ':hover,:focus': {
        color: string;
        textDecoration: string;
        ':visited': {
            color: string;
        };
    };
    'a&:not([href])': {
        color: string;
        cursor: string;
    };
};
declare const Link: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<LinkProps>, "theme">>;
export default Link;
