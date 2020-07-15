/// <reference types="@emotion/core" />
import { BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps, ShadowProps, SpaceProps } from 'styled-system';
interface Props extends BackgroundProps, BorderProps, ShadowProps, SpaceProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps {
    color?: string;
    as?: 'div' | 'section' | 'main' | 'aside' | 'article';
}
declare const Box: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props, import("../../../theme/theme").Theme>;
export default Box;
