/// <reference types="react" />
import { DisplayProps, FlexProps, LayoutProps, SpaceProps } from 'styled-system';
import { ThemeProps } from '../../../theme/theme';
export interface CardContentProps extends ThemeProps, DisplayProps, FlexProps, LayoutProps, SpaceProps {
    variant?: string;
}
declare const _default: import("react").FC<Pick<any, string | number | symbol> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
