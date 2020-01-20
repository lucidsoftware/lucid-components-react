/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  ReactNode,
  SyntheticEvent,
  useContext,
  useRef,
  useState,
  createContext
} from 'react';
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';
import { NavbarContext } from './navbar';

export interface NavbarDropdownProps {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => ReactNode;
}

const DropdownWrapper = styled.div(({ theme }) => ({
  position: 'relative',

  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    '> a, > button': {
      '&::after': {
        content: '":"'
      }
    }
  }
}));

const DROPDOWN_SAFETY_TIMER = 225;

export const NavbarDropdownContext = createContext({
  isOpen: false,
  displayLeft: false
});

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & HTMLProps<HTMLDivElement>
>(({ toggle, children, ...rest }, ref) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    setIsOpen(true);
    setActiveDropdownSetIsOpen([setIsOpen]);

    const threshold = 400;
    const rect = evt.currentTarget.getBoundingClientRect() as DOMRect;
    const dropdownRect = dropdownRef.current
      ? (dropdownRef.current.getBoundingClientRect() as DOMRect)
      : { width: 0 };
    const diff = document.body.offsetWidth - rect.left;
    if (diff < dropdownRect.width) {
      setDisplayLeft(false);
    } else if (diff < threshold && displayLeft) {
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

export default NavbarDropdown;
