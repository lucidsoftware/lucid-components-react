/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef } from 'react';
import { ThemeProps } from '../../../theme/theme';
import { withTheme } from 'emotion-theming';
import { AccordionProps } from './accordion.styles';
import { AccordionItem as ReactAccordionItem } from 'react-accessible-accordion';

import { getItemStyles } from './accordion.styles';

const AccordionItemBase = forwardRef<
  HTMLLIElement,
  ThemeProps & AccordionProps
>(({ theme, children, ...rest }) => {
  const baseCss = getItemStyles();

  return (
    <ReactAccordionItem {...rest} css={baseCss}>
      {children}
    </ReactAccordionItem>
  );
});

const AccordionItem = withTheme(AccordionItemBase);
export default AccordionItem;
