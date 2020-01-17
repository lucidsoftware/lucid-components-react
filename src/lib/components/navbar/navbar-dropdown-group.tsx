/** @jsx jsx */

import { jsx } from '@emotion/core';
import { FC } from 'react';
import styled from '../../../theme/styled';

interface Props {
  label?: string;
}

const NavbarDropdownGroup = styled.div(({ theme, children, ...rest }) => ({
  flex: 1,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  width: '100%',

  [`@media (max-width: ${theme.navbar.collapseAt})`]: {
    flex: '0 1 100%'
  }
}));

export default NavbarDropdownGroup;
