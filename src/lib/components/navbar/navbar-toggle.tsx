/** @jsx jsx */
import { forwardRef, FC, HTMLProps, useContext } from 'react';
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';

import { ThemeProps } from '../../../theme/theme';
import { navbarItemStyles, NavbarContext } from './navbar';

const NavbarToggle: FC<ThemeProps & HTMLProps<HTMLButtonElement>> = forwardRef(
  ({ theme, children, ...rest }, ref) => {
    const { collapseAt, toggleExpanded } = useContext(NavbarContext);
    const StyledToggle = styled.button(navbarItemStyles, {
      display: 'none',
      fontSize: 'inherit',
      [`@media (max-width: ${collapseAt})`]: {
        display: 'block'
      }
    });

    return (
      <StyledToggle ref={ref} {...rest} onClick={toggleExpanded}>
        {children}
      </StyledToggle>
    );
  }
);

export default withTheme(NavbarToggle);
