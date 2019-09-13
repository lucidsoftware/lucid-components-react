/** @jsx jsx */
import { forwardRef, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import NavbarLink from './navbar-link';

const NavbarBrand = forwardRef<
  HTMLAnchorElement,
  ThemeProps &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    HTMLAttributes<HTMLSpanElement>
>(({ theme, ...props }, ref) => {
  const styles = css({
    display: 'inline-block',
    margin: 'auto 0',
    '& > img': {
      maxHeight: theme.navbar.logoHeight,
      maxWidth: '100%'
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      padding: 0
    }
  });

  let StyledComponent;
  if (props.href) {
    StyledComponent = styled(NavbarLink)`
      ${styles}
    `;
  } else {
    StyledComponent = styled('span')`
      ${styles}
    `;
  }

  return <StyledComponent ref={ref} {...props} />;
});

export default withTheme(NavbarBrand);
