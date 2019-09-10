/** @jsx jsx */
import { forwardRef, FC, useContext } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, NavbarContext } from './navbar';
import Link, { LinkProps } from '../link/link';

export interface NavbarLinkProps {
  background?: string;
}

const NavbarLink: FC<NavbarLinkProps & LinkProps> = forwardRef(
  ({ theme, children, ref: oldRef, ...rest }, ref) => {
    const { collapseAt } = useContext(NavbarContext);
    const StyledLink = styled(Link)`
      ${navbarItemStyles};
      @media (max-width: ${collapseAt}) {
        margin-left: 0;
        margin-right: 0;
        padding: 0.5rem 1rem;
        margin-bottom: 0.5rem;
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
