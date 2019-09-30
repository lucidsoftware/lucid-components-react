/** @jsx jsx */
import { ReactNode, forwardRef, createContext, useState } from 'react';
import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

import Button from '../button/button';
import NavbarItem from './navbar-item';
import NavbarBrand from './navbar-brand';
import NavbarBorder from './navbar-border';
import NavbarDropdown from './navbar-dropdown';
import NavbarContainer from './navbar-container';
import NavbarInnerContainer from './navbar-inner-container';
import NavbarToggle from './navbar-toggle';

interface Props {
  as?: 'nav' | 'header' | 'div';
  skipText?: string;
  sticky?: boolean;
  stickyCollapsed?: boolean;
  background?: string;
  children?: ReactNode;
}

export const navbarItemCollapsed = (props: any) => ({
  margin: '.75rem 1rem'
});

export const NavbarContext = createContext({
  expanded: false,
  toggleExpanded: () => {
    return;
  }
});

const NavbarWrapper = styled.nav(({ theme }: any) => ({
  display: 'block',
  background: theme.navbar.background,
  zIndex: 1000,
  top: 0,
  left: 0,
  right: 0,
  padding: `${theme.navbar.padding} 0`,
  minHeight: theme.navbar.minHeight,
  textAlign: 'left'
}));

const NavbarContents = styled.div(({ theme }: any) => ({
  display: 'flex',
  margin: '0 auto',
  position: 'relative'
}));

const NavbarChildren = styled.div({
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%'
});

const NavbarComp = forwardRef<HTMLDivElement, Props & ThemeProps>(
  (
    {
      as = 'nav',
      skipText = 'Skip to Content',
      sticky = false,
      stickyCollapsed = false,
      theme,
      children
    },
    ref
  ) => {
    const [expanded, setExpanded] = useState(false);
    const navbarWrapperStyles = [
      css({
        position: sticky ? ['fixed', 'sticky'] : 'relative',
        [`@media (max-width: ${theme.navbar.collapseAt})`]: {
          position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
        }
      })
    ];

    const navbarSkipStyles = css({
      position: 'absolute',
      top: 0,
      left: '-9999px',
      zIndex: 9000,

      ':active, :focus': {
        left: 0
      }
    });

    const skipHandler = () => {
      const firstHeader = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6'
      )[0] as HTMLHeadingElement;
      if (firstHeader) {
        firstHeader.setAttribute('tabindex', '-1');
        firstHeader.focus();
      }
    };

    const context = {
      expanded,
      toggleExpanded: () => setExpanded(!expanded)
    };

    const isIE11 =
      typeof navigator !== 'undefined' &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('Trident/') !== -1;

    return (
      <NavbarWrapper css={navbarWrapperStyles} ref={ref}>
        {sticky && isIE11 && (
          <Global
            styles={{
              body: {
                marginTop: '60px'
              }
            }}
          />
        )}
        <NavbarContext.Provider value={context}>
          <NavbarContents>
            <Button primary css={navbarSkipStyles} onClick={skipHandler}>
              {skipText}
            </Button>
          </NavbarContents>
          <NavbarChildren>{children}</NavbarChildren>
        </NavbarContext.Provider>
      </NavbarWrapper>
    );
  }
);

const Navbar = Object.assign(withTheme(NavbarComp), {
  Brand: NavbarBrand,
  Border: NavbarBorder,
  InnerContainer: NavbarInnerContainer,
  Container: NavbarContainer,
  Dropdown: NavbarDropdown,
  Item: NavbarItem,
  Toggle: NavbarToggle
});

export default Navbar;
