import React, { FC, useContext } from 'react';

import { ThemeProps } from '../../../theme/theme';
import styled from '../../../theme/styled';
import { NavbarDropdownContext } from './navbar-dropdown';

export interface NavbarDropdownContainerProps {
  mobileToggle?: boolean;
}

const StyledDropdownContainer = styled.div<
  { displayLeft: boolean; isOpen: boolean } & NavbarDropdownContainerProps
>(
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
    isOpen,
    mobileToggle = false
  }: ThemeProps & {
    displayLeft: boolean;
    isOpen: boolean;
    mobileToggle: boolean;
  }) => ({
    label: 'navbarDropdownContainer',
    display: 'flex',
    flexWrap: 'wrap',
    visibility: isOpen ? 'visible' : 'hidden',
    position: 'absolute',
    background,
    top: 'calc(100% + 5px)',
    textAlign: 'left',
    minWidth: '225px',
    maxWidth: '300px',
    width: '100%',
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
      top: '-5px',
      height: '5px'
    },
    [`@media (max-width: ${collapseAt})`]: [
      mobileToggle && { transition: 'height ease-out 0.3s' },
      {
        top: '100%',
        visibility: mobileToggle ? (isOpen ? 'visible' : 'hidden') : 'visible',
        height: mobileToggle ? (isOpen ? 'auto' : '0') : 'auto',
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
    ]
  })
);

const NavbarDropdownContainer: FC<NavbarDropdownContainerProps> = ({
  children,
  ...rest
}) => {
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
