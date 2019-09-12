/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, navbarItemCollapsed } from './navbar';
import Link, { LinkProps } from '../link/link';

export interface NavbarLinkProps {
  background?: string;
}

const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps & LinkProps>(
  ({ theme, children, ref: oldRef, ...rest }, ref) => {
    const StyledLink = styled(Link)`
      ${navbarItemStyles};
      @media (max-width: ${theme.navbar.collapseAt}) {
        ${navbarItemCollapsed}
      }
    `;

    return (
      <StyledLink ref={ref} {...rest}>
        {children}
      </StyledLink>
    );
  }
);

export default withTheme(NavbarLink);
