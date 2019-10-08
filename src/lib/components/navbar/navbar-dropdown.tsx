/** @jsx jsx */
import {
  forwardRef,
  HTMLProps,
  useState,
  SyntheticEvent,
  ReactNode
} from 'react';
import { css, jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import { ThemeProps } from '../../../theme/theme';

export interface NavbarDropdownProps {
  toggle: (
    toggleHandler: (evt: SyntheticEvent<Element, Event>) => void
  ) => void;
}

const NavbarDropdown = forwardRef<
  HTMLDivElement,
  NavbarDropdownProps & ThemeProps & HTMLProps<HTMLDivElement>
>(({ toggle, theme, children, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayLeft, setDisplayLeft] = useState(true);
  let timer: NodeJS.Timeout;

  const handleMouseOver = (evt: SyntheticEvent) => {
    setIsOpen(true);

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

  const handleMouseLeave = () => {
    timer = setTimeout(() => setIsOpen(false), 200);
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

  const dropdownTheme = theme.navbar.dropdown;

  const StyledDropdownContainer = styled.div({
    display: 'flex',
    visibility: 'hidden',
    position: 'absolute',
    background: dropdownTheme.background,
    top: '110%',
    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',
    textAlign: 'left',
    flexWrap: 'wrap',
    minWidth: '225px',
    maxWidth: '300px',
    border: dropdownTheme.border,
    borderRadius: dropdownTheme.borderRadius,
    zIndex: 2000,
    '> li, > p': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding: dropdownTheme.padding
    },
    '> a, > button': {
      position: 'relative',
      display: 'block',
      flex: '1 1 100%',
      width: 'max-content',
      margin: 0,
      padding: dropdownTheme.padding,
      '&:hover': {
        background: dropdownTheme.backgroundHover
      }
    },
    [`@media (max-width: ${theme.navbar.collapseAt})`]: {
      top: '100%',
      visibility: 'visible',
      maxWidth: '100%',
      paddingLeft: '.5rem',
      position: 'relative',
      border: 'none',
      '> a, > button': {
        padding: dropdownTheme.mobilePadding,
        '&:hover': {
          background: 'transparent'
        }
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
      <StyledDropdownContainer css={isOpen ? visible : []}>
        {children}
      </StyledDropdownContainer>
    </div>
  );
});

export default withTheme(NavbarDropdown);
