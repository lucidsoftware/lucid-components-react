/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

import {
  useState,
  createContext,
  ReactNode,
  forwardRef,
  useEffect
} from 'react';

import { Accordion as ReactAccordion } from 'react-accessible-accordion';

import {
  AccordionWrapper,
  AccordionProps,
  getWrapperStyles
} from './accordion.styles';

import AccordionItem from './accordion-item';
import AccordionHeader from './accordion-header';
import AccordionContent from './accordion-content';

interface Props {
  children?: ReactNode;
}

export const AccordionContext = createContext({
  invertStyles: false
});

const AccordionBase = forwardRef<
  HTMLDivElement,
  Props & ThemeProps & AccordionProps
>(({ isInverted, children, theme, ...rest }, ref) => {
  const [invertStyles, setInvertStyles] = useState(false);

  const context = {
    invertStyles
  };

  useEffect(() => {
    if (isInverted) {
      setInvertStyles(isInverted);
    }
  }, []);

  const baseCss = getWrapperStyles({ inverse: invertStyles, theme });

  return (
    <AccordionWrapper ref={ref} css={baseCss}>
      <AccordionContext.Provider value={context}>
        <ReactAccordion>{children}</ReactAccordion>
      </AccordionContext.Provider>
    </AccordionWrapper>
  );
});

const Accordion = Object.assign(withTheme(AccordionBase), {
  Wrapper: AccordionWrapper,
  Item: AccordionItem,
  Header: AccordionHeader,
  Content: AccordionContent
});

export default Accordion;
