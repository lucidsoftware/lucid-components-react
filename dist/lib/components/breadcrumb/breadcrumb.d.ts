import React, { ReactNode } from 'react';
import { ThemeProps } from '../../theme/theme';
interface Props {
    className?: string;
    inverse?: boolean;
    items: ReactNode[];
    seperator?: ReactNode;
}
declare const _default: React.SFC<import("emotion-theming/types/helper").AddOptionalTo<React.PropsWithChildren<Props & ThemeProps>, "theme">>;
export default _default;
