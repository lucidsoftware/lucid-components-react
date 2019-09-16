/** @jsx jsx */
import { forwardRef, AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import { ThemeProps } from '../../../theme/theme';

const NavbarBrand = forwardRef<
  HTMLDivElement,
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

  return <div css={styles} ref={ref} {...props} />;
});

export default withTheme(NavbarBrand);
