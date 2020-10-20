import React, { forwardRef, HTMLAttributes, useContext } from 'react';
import { withTheme } from 'emotion-theming';

import { NavbarContext } from './navbar';
import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';

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
  HTMLAttributes<HTMLButtonElement> & ThemeProps
>(({ children, ...rest }, ref) => {
  const { toggleExpanded } = useContext(NavbarContext);

  return (
    <NavbarToggleButton
      {...rest}
      ref={ref}
      css={{ label: 'navbarToggle' }}
      onClick={toggleExpanded}
    >
      {children}
    </NavbarToggleButton>
  );
});

NavbarToggle.displayName = 'NavbarToggle';

export default withTheme(NavbarToggle);
