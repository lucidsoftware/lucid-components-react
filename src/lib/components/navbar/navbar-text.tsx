/** @jsx jsx */
import { forwardRef, HTMLAttributes } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import { navbarItemStyles, navbarItemCollapsed } from './navbar';

const NavbarText = forwardRef<
  HTMLSpanElement,
  ThemeProps & HTMLAttributes<HTMLSpanElement>
>(({ theme, children, ...rest }, ref) => {
  const StyledText = styled.span(navbarItemStyles, {
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      ...navbarItemCollapsed({ theme })
    }
  });

  return (
    <StyledText ref={ref} {...rest}>
      {children}
    </StyledText>
  );
});

export default withTheme(NavbarText);
