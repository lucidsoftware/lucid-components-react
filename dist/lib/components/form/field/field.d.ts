import { ReactNode } from 'react';
import { SpaceProps } from 'styled-system';
export declare enum FloatingStatus {
    Default = "default",
    Floating = "floating"
}
export interface Props {
    children: ReactNode;
    floating?: boolean;
    disabled?: boolean;
}
declare const Field: import("@emotion/styled-base").StyledComponent<Props, Props & SpaceProps<Required<import("styled-system").Theme<string | number>>, string | number | symbol>, import("../../../../theme/theme").Theme>;
export default Field;
