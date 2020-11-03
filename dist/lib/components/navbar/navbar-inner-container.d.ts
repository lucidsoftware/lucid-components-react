import React, { HTMLAttributes } from 'react';
export interface NavbarInnerContainerProps extends HTMLAttributes<HTMLOListElement> {
    background?: string;
}
declare const NavbarInnerContainer: React.ForwardRefExoticComponent<NavbarInnerContainerProps & React.RefAttributes<HTMLOListElement>>;
export default NavbarInnerContainer;
