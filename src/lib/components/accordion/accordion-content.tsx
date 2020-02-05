/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, useContext } from 'react';
import { ThemeProps } from '../../../theme/theme';
import { withTheme } from 'emotion-theming';

import { AccordionItemPanel } from 'react-accessible-accordion';
import { getContentStyles, AccordionProps } from './accordion.styles';
import { AccordionContext } from './accordion';

const AccordionContentBase = forwardRef<
  HTMLDivElement,
  ThemeProps & AccordionProps
>(({ theme, isInverted, children, ...rest }, ref) => {
  const { invertStyles } = useContext(AccordionContext);
  const baseCss = getContentStyles({ inverse: invertStyles, theme });

  return (
    <AccordionItemPanel css={baseCss} {...rest}>
      {children}
    </AccordionItemPanel>
  );
});

const AccordionContent = withTheme(AccordionContentBase);
export default AccordionContent;
