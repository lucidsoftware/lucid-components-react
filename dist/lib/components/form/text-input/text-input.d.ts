import * as React from 'react';
import { TypographyProps, SpaceProps } from 'styled-system';
import { VariantProps } from '../../../../types';
export interface Props extends TypographyProps, SpaceProps, VariantProps {
    validate?: boolean;
    disabled?: boolean;
    placeholder?: string;
    validator?: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
}
declare const TextInput: any;
export default TextInput;
