/// <reference types="@emotion/core" />
import { ThemeProps } from '../../../theme/theme';
import { DisplayProps, FlexProps, LayoutProps, SpaceProps } from 'styled-system';
export interface CardContentProps extends ThemeProps, DisplayProps, FlexProps, LayoutProps, SpaceProps {
    variant?: string;
}
declare const CardContent: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, CardContentProps, import("../../../theme/theme").Theme>;
export default CardContent;
