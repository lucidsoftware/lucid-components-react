import React, { RefAttributes, AnchorHTMLAttributes } from 'react';
import { ThemeProps } from '../../../theme/theme';
import { ButtonSize } from '../button/button';
export declare type UnderlineType = 'none' | 'hover' | 'always';
export interface CoreLinkProps {
    active?: boolean;
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;
    asButton?: boolean;
    block?: boolean;
    buttonSize?: ButtonSize;
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
    active?: boolean | undefined;
    block?: boolean | undefined;
    inverse?: boolean | undefined;
    underline?: string | undefined;
    variant?: LinkVariant | undefined;
} & ThemeProps) => {
    color: any;
    display: string;
    border: string;
    fontSize: string;
    textAlign: string;
    textDecoration: string;
    cursor: string;
    ':visited': {
        color: any;
    };
    ':hover,:focus': {
        color: any;
        textDecoration: string;
        ':visited': {
            color: any;
        };
    };
    'a&:not([href])': {
        color: any;
        cursor: string;
    };
};
declare const Link: React.SFC<import("emotion-theming/types/helper").AddOptionalTo<React.PropsWithChildren<LinkProps>, "theme">>;
export default Link;
