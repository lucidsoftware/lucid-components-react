/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import NavbarItem from './navbar-item';
import { NavbarContext } from './navbar';

export interface NavbarContainerProps {
  background?: string;
}

const NavbarLink = forwardRef<
  HTMLOListElement,
  NavbarContainerProps & ThemeProps & HTMLAttributes<HTMLOListElement>
>(({ theme, children, ...rest }, ref) => {
  const { expanded } = useContext(NavbarContext);
  const containerStyles = css({
    display: 'flex',
    margin: `auto -${theme.navbar.itemSpacing}`,

    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      display: 'none',
      flex: '0 1 100%'
    }
  });

  const expandedStyles = css({
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  });

  return (
    <ol
      css={[containerStyles, expanded ? expandedStyles : '']}
      ref={ref}
      {...rest}
    >
      {children}
    </ol>
  );
});

export default withTheme(NavbarLink);
