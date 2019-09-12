/** @jsx jsx */
import { forwardRef, HTMLAttributes, useContext } from 'react';
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';

export interface NavbarContainerProps {
  background?: string;
}

const NavbarLink = forwardRef<
  HTMLDivElement,
  NavbarContainerProps & ThemeProps & HTMLAttributes<HTMLDivElement>
>(({ theme, children, ...rest }, ref) => {
  const { expanded } = useContext(NavbarContext);
  const StyledContainer = styled.div({
    display: 'flex',
    marginLeft: `-${theme.navbar.itemSpacing}`,
    marginRight: `-${theme.navbar.itemSpacing}`,
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      display: 'none',
      flex: '0 1 100%'
    }
  });

  const expandedStyles = css({
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  });

  return (
    <StyledContainer css={expanded ? expandedStyles : ''} ref={ref} {...rest}>
      {children}
    </StyledContainer>
  );
});

export default withTheme(NavbarLink);
