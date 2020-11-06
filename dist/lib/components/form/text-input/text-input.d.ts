import * as React from 'react';
import { TypographyProps, SpaceProps } from 'styled-system';
import { VariantProps } from '../../../types/types';
export interface Props extends TypographyProps, SpaceProps, VariantProps {
    disabled?: boolean;
    placeholder?: string;
    validate?: boolean;
    validator?: (event: React.ChangeEvent<HTMLInputElement> | string) => boolean;
}
declare const TextInput: import("@emotion/styled-base").StyledComponent<Props, Props, import("../../../theme/theme").Theme>;
export default TextInput;
