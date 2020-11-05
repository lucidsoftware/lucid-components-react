import { TypographyProps, SpaceProps, BorderProps, BackgroundProps } from 'styled-system';
import { VariantProps } from '../../types/types';
export interface Props extends BackgroundProps, TypographyProps, SpaceProps, VariantProps, BorderProps {
}
declare const AccordionPanel: import("@emotion/styled-base").StyledComponent<import("react-accessible-accordion/dist/types/helpers/types").DivAttributes & {
    className?: string | undefined;
}, Props, import("../../theme/theme").Theme>;
export default AccordionPanel;
