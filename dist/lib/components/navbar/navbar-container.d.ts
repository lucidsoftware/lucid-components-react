/// <reference types="@emotion/core" />
/** @jsx jsx */
import { HTMLAttributes } from 'react';
import { ThemeProps } from '../../../theme/theme';
export interface NavbarContainerProps {
    background?: string;
}
declare const _default: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<NavbarContainerProps & ThemeProps & HTMLAttributes<HTMLOListElement> & import("react").RefAttributes<HTMLOListElement>, "theme">>;
export default _default;
