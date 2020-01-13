/** @jsx jsx */
import { forwardRef, useContext } from 'react';
import { jsx } from '@emotion/core';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

import {
  AccordionItemHeading,
  AccordionItemButton
} from 'react-accessible-accordion';

import { AccordionContext } from './accordion';

import { getHeaderContainerStyles, getHeaderStyles } from './accordion.styles';

const AccordionHeaderBase = forwardRef<HTMLButtonElement, ThemeProps>(
  ({ theme, children, ...rest }, ref) => {
    const { invertStyles } = useContext(AccordionContext);
    const baseCss = getHeaderStyles({ inverse: invertStyles, theme });
    const containerCss = getHeaderContainerStyles();

    return (
      <AccordionItemHeading css={containerCss} {...rest}>
        <AccordionItemButton css={baseCss} {...rest}>
          {children}
        </AccordionItemButton>
      </AccordionItemHeading>
    );
  }
);

const AccordionHeader = withTheme(AccordionHeaderBase);
export default AccordionHeader;
