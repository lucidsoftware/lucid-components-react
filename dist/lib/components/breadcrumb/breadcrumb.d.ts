import React, { ReactNode } from 'react';
import { ThemeProps } from '../../../theme/theme';
interface Props {
    className?: string;
    inverse?: boolean;
    items: ReactNode[];
    seperator?: ReactNode;
}
declare const _default: React.FC<Pick<React.PropsWithChildren<Props & ThemeProps>, "inverse" | "children" | "className" | "items" | "seperator"> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
