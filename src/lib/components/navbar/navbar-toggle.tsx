/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';

const NavbarToggle = forwardRef<
  HTMLButtonElement,
  ThemeProps & HTMLAttributes<HTMLButtonElement>
>(({ theme, children, ...rest }, ref) => {
  const { toggleExpanded } = useContext(NavbarContext);
  const toggleStyles = css({
    display: 'none',
    background: 'transparent',
    border: 0,
    fontSize: 'inherit',
    minHeight: theme.navbar.minHeight,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      display: 'block'
    }
  });

  return (
    <button css={toggleStyles} ref={ref} {...rest} onClick={toggleExpanded}>
      {children}
    </button>
  );
});

export default withTheme(NavbarToggle);
