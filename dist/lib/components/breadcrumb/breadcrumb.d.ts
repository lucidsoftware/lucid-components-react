/// <reference types="@emotion/core" />
import { ReactNode } from 'react';
import { ThemeProps } from '../../../theme/theme';
interface Props {
    className?: string;
    inverse?: boolean;
    items: ReactNode[];
    seperator?: ReactNode;
}
declare const _default: import("react").SFC<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<Props & ThemeProps>, "theme">>;
export default _default;
