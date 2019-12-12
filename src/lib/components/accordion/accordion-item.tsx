/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, useState, createContext } from 'react';
import { ThemeProps } from '../../../theme/theme';
import { AccordionItemContainer, AccordionProps } from './accordion.styles';

let accordionHeaderId = 0;
let accordionCounterId = 0;

export const AccordionItemContext = createContext({
  expanded: false,
  toggleExpanded: () => {
    return;
  },
  getAccordionHeaderId: () => {
    return accordionHeaderId;
  },
  getAccordionContentId: () => {
    return accordionCounterId;
  }
});

const AccordionItem = forwardRef<HTMLLIElement, ThemeProps & AccordionProps>(
  ({ theme, children, ...rest }, ref) => {
    const [expanded, setExpanded] = useState(false);
    const context = {
      expanded,
      toggleExpanded: () => {
        setExpanded(!expanded);
      },
      getAccordionHeaderId: () => {
        accordionHeaderId += 1;
        return accordionHeaderId;
      },
      getAccordionContentId: () => {
        accordionCounterId += 1;
        return accordionCounterId;
      }
    };

    return (
      <AccordionItemContainer
        aria-label="Accordion Control Group"
        ref={ref}
        {...rest}
      >
        <AccordionItemContext.Provider value={context}>
          {children}
        </AccordionItemContext.Provider>
      </AccordionItemContainer>
    );
  }
);

export default AccordionItem;