/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import {
  useState,
  createContext,
  ReactNode,
  forwardRef,
  useEffect
} from 'react';

import AccordionItem from './accordion-item';
import AccordionHeader from './accordion-header';
import AccordionContent from './accordion-content';

import {
  AccordionWrapper,
  AccordionChildren,
  AccordionIconContainer,
  AccordionProps
} from './accordion.styles';

interface Props {
  children?: ReactNode;
}

export const AccordionContext = createContext({
  invertStyles: false
});

const AccordionBase = forwardRef<
  HTMLDivElement,
  Props & ThemeProps & AccordionProps
>(({ isInverted, children }, ref) => {
  const [invertStyles, setInvertStyles] = useState(false);

  const context = {
    invertStyles
  };

  useEffect(() => {
    if (isInverted) {
      setInvertStyles(isInverted);
    }
  }, []);

  return (
    <AccordionWrapper ref={ref}>
      <AccordionContext.Provider value={context}>
        <AccordionChildren>{children}</AccordionChildren>
      </AccordionContext.Provider>
    </AccordionWrapper>
  );
});

const Accordion = Object.assign(withTheme(AccordionBase), {
  Wrapper: AccordionWrapper,
  Children: AccordionChildren,
  Item: AccordionItem,
  Header: AccordionHeader,
  Content: AccordionContent,
  Icon: AccordionIconContainer
});

export default Accordion;