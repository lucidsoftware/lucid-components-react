/** @jsx jsx */
import { forwardRef, FC, HTMLProps, useContext } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import NavbarLink from './navbar-link';
import { NavbarContext } from './navbar';

const NavbarBrand: FC<
  ThemeProps & HTMLProps<HTMLAnchorElement & HTMLSpanElement>
> = forwardRef(({ theme, as, ref: oldRef, ...props }, ref) => {
  const { collapseAt } = useContext(NavbarContext);

  let StyledComponent = styled.span({
    display: 'inline-block',
    margin: 'auto 0',
    '& > img': {
      maxHeight: theme.navbar.logoHeight,
      maxWidth: '100%'
    },
    [`@media (max-width: ${collapseAt})`]: {
      padding: 0
    }
  });

  if (props.href) {
    StyledComponent = StyledComponent.withComponent(NavbarLink);
  }

  return <StyledComponent ref={ref} {...props} />;
});

export default withTheme(NavbarBrand);
