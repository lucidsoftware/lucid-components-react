import { TypographyProps, SpaceProps } from 'styled-system';
import { VariantProps } from '../../../../types';
export interface Props extends TypographyProps, SpaceProps, VariantProps {
    validate?: boolean;
    validator?: (event: string) => boolean;
}
declare const TextInput: import("@emotion/styled-base").StyledComponent<any, Props, import("../../../../theme/theme").Theme>;
export default TextInput;
