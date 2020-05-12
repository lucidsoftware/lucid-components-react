/// <reference types="@emotion/core" />
import { ReactNode, ButtonHTMLAttributes, RefAttributes } from 'react';
import { ThemeProps } from '../../../theme/theme';
import { UnderlineType } from '../link/link';
export declare type ButtonSize = 'small' | 'regular' | 'large';
export interface CoreButtonProps {
    className?: string;
    id?: string;
    children?: ReactNode;
    primary?: boolean;
    secondary?: boolean;
    inverse?: boolean;
    asLink?: boolean;
    underline?: UnderlineType;
    block?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    hover?: boolean;
    active?: boolean;
    css?: any;
    onClick?: () => void;
    onHover?: () => void;
    mouseOver?: () => void;
}
export declare type ButtonProps = CoreButtonProps & ThemeProps & RefAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const getButtonStyles: ({ theme, variant, size, block, active }: {
    variant?: string | undefined;
    block?: boolean | undefined;
    size?: "small" | "large" | "regular" | undefined;
    active?: boolean | undefined;
} & ThemeProps) => {
    display: string;
    width: string;
    textAlign: string;
    padding: any;
    fontSize: string;
    fontWeight: string;
    lineHeight: any;
    borderRadius: string;
    boxShadow: any;
    transition: any;
    textDecoration: string;
    color: string;
    backgroundColor: string;
    border: any;
    '&:visited': {
        color: string;
    };
    ':hover,:focus': {
        color: string;
        backgroundColor: string;
        border: any;
        cursor: string;
        boxShadow: any;
        textDecoration: string;
    };
};
declare const Button: import("react").SFC<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<ButtonProps>, "theme">>;
export default Button;
