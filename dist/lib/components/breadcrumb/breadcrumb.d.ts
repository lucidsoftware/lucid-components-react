/// <reference types="@emotion/core" />
import { ReactNode } from 'react';
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    inverse?: boolean;
    items: ReactNode[];
    seperator?: ReactNode;
    theme: ThemeInterface;
}
declare const Breadcrumb: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<Props>, "theme">>;
export default Breadcrumb;
