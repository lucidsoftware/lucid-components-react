/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  useState,
  SyntheticEvent,
  useContext
} from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';

import styled from '../../../theme/styled';
import { ThemeProps } from '../../../theme/theme';
import { NavbarContext } from './navbar';

export interface NavbarDropdownProps {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => void;
}

const StyledDropdownContainer = styled.div(
  ({
    theme: {
      navbar: {
        collapseAt,
        dropdown: {
          background,
          border,
          borderRadius,
          padding,
          backgroundHover,
          mobilePadding
        }
      }
    }
  }) => ({
    display: 'flex',
    visibility: 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    flexWrap: 'wrap',
    minWidth: '225px',
    maxWidth: '300px',
    border,
    borderRadius,
    zIndex: 2000,
    '> li, > p': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding,
    },
    '> a, > button': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding,
      '&:hover': {
        background: backgroundHover
      }
    },
    [`@media (max-width: ${collapseAt})`]: {
      top: '100%',
      visibility: 'visible',
      maxWidth: '100%',
      paddingLeft: '.5rem',
      position: 'relative',
      border: 'none',
      '> li, > p': {
        padding: mobilePadding,
        width: 'auto'
      },
      '> a, > button': {
        padding: mobilePadding,
        width: 'auto',
        '&:hover': {
          background: 'transparent'
        }
      }
    }
  })
);

const DROPDOWN_SAFETY_TIMER = 225;

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & ThemeProps & HTMLProps<HTMLDivElement>
>(({ toggle, theme, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  const { setActiveDropdownSetIsOpen } = useContext(NavbarContext);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    setIsOpen(true);
    setActiveDropdownSetIsOpen([setIsOpen]);

    const threshold = 400;
    const rect = evt.currentTarget.getBoundingClientRect() as DOMRect;
    const diff = document.body.offsetWidth - rect.left;
    if (diff < threshold && displayLeft !== false) {
      setDisplayLeft(false);
    } else if (diff >= threshold && displayLeft !== true) {
      setDisplayLeft(true);
    }

    clearTimeout(timer);
  };

  const positioning = css({
    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',
  });

  const handleMouseLeave = () => {
    timer = setTimeout(() => setIsOpen(false), DROPDOWN_SAFETY_TIMER);
  };

  const visible = css({
    visibility: 'visible'
  });

  const dropdownStyles = css({
    position: 'relative',
    '&:hover': {
      cursor: 'pointer'
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      '> *, > a, > button': {
        width: '100%'
      }
    }
  });

  return (
    <div
      css={dropdownStyles}
      role="navigation"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseOver}
      onBlur={handleMouseLeave}
      ref={ref}
      {...rest}
    >
      {toggle(handleMouseOver)}
      <StyledDropdownContainer css={[positioning, isOpen && visible]}>
        {children}
      </StyledDropdownContainer>
    </div>
  );
});

export default withTheme(NavbarDropdown);
