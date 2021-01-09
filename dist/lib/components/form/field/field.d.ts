import { ReactNode } from 'react';
export declare enum FloatingStatus {
    Default = "default",
    Floating = "floating"
}
export interface Props {
    children: ReactNode;
    floating?: boolean;
    disabled?: boolean;
}
declare const Field: any;
export default Field;
