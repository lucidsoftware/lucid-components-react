/** @jsx jsx */
import {
  ReactNode,
  forwardRef,
  createContext,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { Global, jsx } from '@emotion/core';
import styled from '../../../theme/styled';

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

export const NavbarContext = createContext({
  expanded: false,
  toggleExpanded: () => {
    return;
  },
  setActiveDropdownSetIsOpen: (activeDropdown: any): void => undefined
});

const NavbarWrapper = styled.nav<Props>(
  ({ theme, sticky, stickyCollapsed }) => ({
    display: 'block',
    background: theme.navbar.background,
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    padding: `${theme.navbar.padding} 0`,
    minHeight: theme.navbar.minHeight,
    textAlign: 'left',
    position: sticky ? ['fixed', 'sticky'] : 'relative',
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      position: stickyCollapsed ? ['fixed', 'sticky'] : 'relative'
    }
  })
);

const NavbarContents = styled.div({
  display: 'flex',
  margin: '0 auto',
  position: 'relative'
});

const NavbarChildren = styled.div({
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '100%'
});

const NavbarSkip = styled(Button)({
  position: 'absolute',
  top: 0,
  left: '-9999px',
  zIndex: 9000,

  ':active, :focus': {
    left: 0
  }
});

const NavbarComp = forwardRef<HTMLDivElement, Props>(
  (
    {
      as = 'nav',
      skipText = 'Skip to Content',
      sticky = false,
      stickyCollapsed = false,
      children
    },
    ref
  ) => {
    const [[activeDropdownSetIsOpen], setActiveDropdownSetIsOpen] = useState<
      Array<Dispatch<SetStateAction<boolean>>>
    >([]);
    const [expanded, setExpanded] = useState(false);

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
      setActiveDropdownSetIsOpen: ([dropdownSetIsOpen]: any) => {
        if (!activeDropdownSetIsOpen) {
          setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
        } else if (activeDropdownSetIsOpen !== dropdownSetIsOpen) {
          activeDropdownSetIsOpen(false);
          setActiveDropdownSetIsOpen([dropdownSetIsOpen]);
        }
      },
      expanded,
      toggleExpanded: () => setExpanded(!expanded)
    };

    const isIE11 =
      typeof navigator !== 'undefined' &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('Trident/') !== -1;

    return (
      <NavbarWrapper
        ref={ref}
        sticky={sticky}
        stickyCollapsed={stickyCollapsed}
      >
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
            <NavbarSkip primary onClick={skipHandler}>
              {skipText}
            </NavbarSkip>
          </NavbarContents>
          <NavbarChildren>{children}</NavbarChildren>
        </NavbarContext.Provider>
      </NavbarWrapper>
    );
  }
);

const Navbar = Object.assign(NavbarComp, {
  Brand: NavbarBrand,
  Border: NavbarBorder,
  InnerContainer: NavbarInnerContainer,
  Container: NavbarContainer,
  Dropdown: NavbarDropdown,
  Item: NavbarItem,
  Toggle: NavbarToggle
});

export default Navbar;
