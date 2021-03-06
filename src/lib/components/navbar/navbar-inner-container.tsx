import React, { forwardRef, HTMLAttributes, useContext } from 'react';

import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';
import styled from '../../../theme/styled';

export interface NavbarInnerContainerProps
  extends HTMLAttributes<HTMLOListElement> {
  background?: string;
}

const NavbarInnerContainerList = styled.ol<{ expanded: boolean }>(
  ({ theme, expanded }: ThemeProps & { expanded: boolean }) => ({
    label: 'navbarInnerContainer',
    display: 'flex',
    order: 2,
    margin: `auto -${theme.navbar.itemSpacing}`,
    padding: 0,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: [
      {
        display: 'none',
        flex: '0 1 100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
        maxHeight: 'calc(100vh - 60px)',
        padding: '0 5px 80px 5px',
        margin: 'auto 0'
      },
      expanded && {
        position: 'relative',
        display: 'block',
        border: theme.navbar.dropdown.border,
        borderRadius: theme.navbar.dropdown.borderRadius,
        padding: '0 0 3rem'
      }
    ]
  })
);

const NavbarInnerContainer = forwardRef<
  HTMLOListElement,
  NavbarInnerContainerProps
>(({ children, ...rest }, ref) => {
  const { expanded } = useContext(NavbarContext);

  return (
    <NavbarInnerContainerList ref={ref} expanded={expanded} {...rest}>
      {children}
    </NavbarInnerContainerList>
  );
});

NavbarInnerContainer.displayName = 'NavbarInnerContainer';

export default NavbarInnerContainer;
