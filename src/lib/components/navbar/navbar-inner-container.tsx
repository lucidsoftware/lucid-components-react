/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx } from '@emotion/core';
import { NavbarContext } from './navbar';
import styled from '../../../theme/styled';

export interface NavbarInnerContainerProps {
  background?: string;
}

const NavbarInnerContainerList = styled.ol<{ expanded: boolean }>(
  ({ theme, expanded }) => ({
    display: 'flex',
    order: 2,
    margin: `auto -${theme.navbar.itemSpacing}`,
    padding: 0,

    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      display: 'none',
      flex: '0 1 100%',
      overflowY: 'scroll',
      overflowX: 'hidden',
      maxHeight: 'calc(100vh - 60px)',
      padding: '0 5px 80px 5px',
      margin: 'auto 0',

      ...(expanded && {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        border: theme.navbar.dropdown.border,
        borderRadius: theme.navbar.dropdown.borderRadius,
        padding: '0 0 3rem'
      })
    }
  })
);

const NavbarInnerContainer = forwardRef<
  HTMLOListElement,
  NavbarInnerContainerProps & HTMLAttributes<HTMLOListElement>
>(({ children, ...rest }, ref) => {
  const { expanded } = useContext(NavbarContext);

  return (
    <NavbarInnerContainerList ref={ref} expanded={expanded} {...rest}>
      {children}
    </NavbarInnerContainerList>
  );
});

export default NavbarInnerContainer;
