/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
  createContext
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import { NavbarContext } from './navbar';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarDropdownProps extends HTMLProps<HTMLDivElement> {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => ReactNode;
}

const DropdownWrapper = styled.div(() => ({
  position: 'relative'
}));

const DROPDOWN_SAFETY_TIMER = 225;

export const NavbarDropdownContext = createContext({
  isOpen: false,
  displayLeft: false
});

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & ThemeProps
>(({ toggle, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    setIsOpen(true);
    setActiveDropdownSetIsOpen([setIsOpen]);

    const threshold = 400;
    const rect = evt.currentTarget.getBoundingClientRect();
    const diff = document.body.offsetWidth - rect.left;
    if (diff < threshold && displayLeft) {
      setDisplayLeft(false);
    } else if (diff >= threshold && !displayLeft) {
      setDisplayLeft(true);
    }

    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
  };

  const context = {
    isOpen,
    displayLeft
  };

  return (
    <DropdownWrapper
      {...rest}
      role="navigation"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      ref={ref}
    >
      <NavbarDropdownContext.Provider value={context}>
        {toggle(handleMouseOver)}
        {children}
      </NavbarDropdownContext.Provider>
    </DropdownWrapper>
  );
});

NavbarDropdown.displayName = 'NavbarDropdown';

export default withTheme(NavbarDropdown);
