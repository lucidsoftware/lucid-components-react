/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import { navbarItemStyles, NavbarContext } from './navbar';

const NavbarToggle = forwardRef<
  HTMLButtonElement,
  ThemeProps & HTMLAttributes<HTMLButtonElement>
>(({ theme, children, ...rest }, ref) => {
  const { toggleExpanded } = useContext(NavbarContext);
  const StyledToggle = styled.button(navbarItemStyles, {
    display: 'none',
    background: 'transparent',
    border: 0,
    fontSize: 'inherit',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      display: 'block'
    }
  });

  return (
    <StyledToggle ref={ref} {...rest} onClick={toggleExpanded}>
      {children}
    </StyledToggle>
  );
});

export default withTheme(NavbarToggle);
