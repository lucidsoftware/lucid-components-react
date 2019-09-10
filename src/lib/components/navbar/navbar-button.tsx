/** @jsx jsx */
import { forwardRef, FC, useContext } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { navbarItemStyles, NavbarContext } from './navbar';
import Button, { ButtonProps } from '../button/button';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarButtonProps {
  background?: string;
}

const NavbarButton: FC<NavbarButtonProps & ButtonProps> = forwardRef(
  ({ theme, children, ref: oldRef, ...rest }, ref) => {
    const { collapseAt } = useContext(NavbarContext);
    const StyledButton = styled(Button)`
      ${navbarItemStyles};
      @media (max-width: ${collapseAt}) {
        margin-left: 0;
        margin-right: 0;
      }
    `;

    return (
      <StyledButton ref={ref} {...rest}>
        {children}
      </StyledButton>
    );
  }
);

export default withTheme(NavbarButton);
