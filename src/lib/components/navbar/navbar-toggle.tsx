/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx } from '@emotion/core';

import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';
import styled from '../../../theme/styled';

const NavbarToggleButton = styled.button(({ theme }) => ({
  display: 'none',
  background: 'transparent',
  border: 0,
  fontSize: 'inherit',
  minHeight: theme.navbar.minHeight,
  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    display: 'block'
  }
}));

const NavbarToggle = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ children, ...rest }, ref) => {
  const { toggleExpanded } = useContext(NavbarContext);

  return (
    <NavbarToggleButton ref={ref} {...rest} onClick={toggleExpanded}>
      {children}
    </NavbarToggleButton>
  );
});

export default NavbarToggle;
