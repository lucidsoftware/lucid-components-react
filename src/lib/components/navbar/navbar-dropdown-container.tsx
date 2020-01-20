/** @jsx jsx */

import { jsx } from '@emotion/core';
import styled from '../../../theme/styled';
import { FC, useContext } from 'react';
import { NavbarDropdownContext } from './navbar-dropdown';

const StyledDropdownContainer = styled.div<{
  displayLeft: boolean;
  isOpen: boolean;
}>(
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
    },
    displayLeft,
    isOpen
  }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: '110%',
    textAlign: 'left',
    minWidth: '225px',
    maxWidth: '300px',
    border,
    borderRadius,
    zIndex: 2000,
    'li, p': {
      flex: '1 1 100%',
      margin: 0,
      padding
    },
    'a, button': {
      flex: '1 1 100%',
      padding,
      '&:hover': {
        background: backgroundHover
      }
    },

    right: displayLeft ? '' : '0',
    left: displayLeft ? '0' : '',

    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      top: '-20px',
      height: '20px'
    },

    [`@media (max-width: ${collapseAt})`]: {
      top: '100%',
      visibility: 'visible',
      maxWidth: '100%',
      padding: 0,
      position: 'relative',
      border: 'none',
      flexWrap: 'wrap',
      'li, p': {
        padding: mobilePadding,
        paddingLeft: 0,
        paddingRight: 0
      },
      'a, button': {
        padding: mobilePadding,
        paddingLeft: 0,
        paddingRight: 0,
        '&:hover': {
          background: 'transparent'
        }
      },

      '&::before': {
        display: 'none'
      }
    }
  })
);

const NavbarDropdownContainer: FC = ({ children, ...rest }) => {
  const { isOpen, displayLeft } = useContext(NavbarDropdownContext);

  return (
    <StyledDropdownContainer
      displayLeft={displayLeft}
      isOpen={isOpen}
      {...rest}
    >
      {children}
    </StyledDropdownContainer>
  );
};

export default NavbarDropdownContainer;
