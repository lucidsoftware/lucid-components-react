/// <reference types="@emotion/core" />
/** @jsx jsx */
import { HTMLAttributes } from 'react';
import { ThemeProps } from '../../../theme/theme';
export interface NavbarInnerContainerProps {
    background?: string;
}
declare const _default: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<NavbarInnerContainerProps & ThemeProps & HTMLAttributes<HTMLOListElement> & import("react").RefAttributes<HTMLOListElement>, "theme">>;
export default _default;
