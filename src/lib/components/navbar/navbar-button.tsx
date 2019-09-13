/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, navbarItemCollapsed } from './navbar';
import Button, { ButtonProps } from '../button/button';

export interface NavbarButtonProps {
  background?: string;
}

const NavbarButton = forwardRef<
  HTMLButtonElement,
  NavbarButtonProps & ButtonProps
>(({ theme, children, ...rest }, ref) => {
  const StyledButton = styled(Button)`
    ${navbarItemStyles};
    @media (max-width: ${theme.navbar.collapseAt}) {
      ${navbarItemCollapsed}
    }
  `;

  return (
    <StyledButton ref={ref} {...rest}>
      {children}
    </StyledButton>
  );
});

export default withTheme(NavbarButton);
