/// <reference types="@emotion/core" />
import { TypographyProps, SpaceProps, FlexboxProps, BorderProps, BackgroundProps } from 'styled-system';
export interface Props extends BackgroundProps, BorderProps, TypographyProps, SpaceProps, FlexboxProps {
}
declare const AccordionHeading: import("@emotion/styled-base").StyledComponent<import("react").PropsWithChildren<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes>, Props, object>;
export default AccordionHeading;
