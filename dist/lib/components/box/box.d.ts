/// <reference types="@emotion/core" />
import { BackgroundProps, BackgroundColorProps, BorderProps, FlexboxProps, GridProps, LayoutProps, OpacityProps, PositionProps, ShadowProps, SpaceProps } from 'styled-system';
interface ColorProps extends BackgroundColorProps, OpacityProps {
}
interface Props extends BackgroundProps, BorderProps, ShadowProps, SpaceProps, ColorProps, FlexboxProps, GridProps, LayoutProps, PositionProps {
}
declare const Box: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Props, import("../../../theme/theme").Theme>;
export default Box;
