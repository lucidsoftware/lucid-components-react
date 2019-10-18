/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';

export interface NavbarInnerContainerProps {
  background?: string;
}

const NavbarInnerContainer = forwardRef<
  HTMLOListElement,
  NavbarInnerContainerProps & ThemeProps & HTMLAttributes<HTMLOListElement>
>(({ theme, children, ...rest }, ref) => {
  const { expanded } = useContext(NavbarContext);
  const containerStyles = css({
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
      padding: '0 5px',
      margin: 'auto 0'
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

export default withTheme(NavbarInnerContainer);
