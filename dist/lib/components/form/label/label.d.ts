import { TypographyProps, SpaceProps } from 'styled-system';
export interface Props extends TypographyProps, SpaceProps {
    activeColor?: string;
}
declare const Label: import("@emotion/styled-base").StyledComponent<any, Props, import("../../../../theme/theme").Theme>;
export default Label;
