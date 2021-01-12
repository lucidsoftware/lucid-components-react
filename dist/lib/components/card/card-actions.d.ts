/// <reference types="react" />
import { SpaceProps, LayoutProps } from 'styled-system';
import { ThemeProps } from '../../../theme/theme';
export interface CardActionsProps extends ThemeProps, SpaceProps, LayoutProps {
}
declare const _default: import("react").FC<Pick<any, string | number | symbol> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
