import { FC, ReactNode } from 'react';
interface Props {
    className?: string;
    inverse?: boolean;
    items: ReactNode[];
    seperator?: ReactNode;
}
declare const Breadcrumb: FC<Props>;
export default Breadcrumb;
