/// <reference types="@emotion/core" />
import { ReactNode } from 'react';
import { ThemeInterface } from '../../../theme/theme';
interface Props {
    className?: string;
    seperator?: ReactNode;
    items: ReactNode[];
    theme: ThemeInterface;
}
declare const Breadcrumb: import("react").FunctionComponent<import("emotion-theming/types/helper").AddOptionalTo<import("react").PropsWithChildren<Props>, "theme">>;
export default Breadcrumb;
