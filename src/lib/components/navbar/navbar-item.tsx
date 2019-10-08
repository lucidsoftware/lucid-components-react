/** @jsx jsx */
import { forwardRef } from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';

export interface NavbarLinkProps {
  background?: string;
}

const StyledItem = styled.li({
  flex: '0 1 auto',
  alignSelf: 'flex-start'
});

const NavbarItem = forwardRef<HTMLLIElement, ThemeProps>(
  ({ theme, children, ...rest }, ref) => {
    const itemStyles = css({
      listStyle: 'none',
      flex: '0 1 auto',
      margin: `auto ${theme.navbar.itemSpacing}`,
      alignSelf: 'flex-start',

      [`@media (max-width: ${theme.navbar.collapseAt})`]: {
        margin: `.75rem 0`,
        width: '100%',
        '> a, > button': {
          width: '100%'
        }
      }
    });

    return (
      <StyledItem css={itemStyles} ref={ref} {...rest}>
        {children}
      </StyledItem>
    );
  }
);

export default withTheme(NavbarItem);
