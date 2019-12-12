/** @jsx jsx */
import { jsx } from '@emotion/core';

import { forwardRef, useEffect, useState, useContext } from 'react';

import { ThemeProps } from '../../../theme/theme';

import { AccordionContext } from './accordion';
import { AccordionItemContext } from './accordion-item';

import { AccordionItemProps, AccordionContentStyle } from './accordion.styles';

const AccordionContent = forwardRef<
  HTMLDivElement,
  ThemeProps & AccordionItemProps
>(({ theme, children, ...rest }, ref) => {
  const [accordionContentId, setAccordionContentId] = useState(0);
  const { getAccordionContentId, expanded } = useContext(AccordionItemContext);
  const { invertStyles } = useContext(AccordionContext);

  useEffect(() => {
    const id = getAccordionContentId();
    setAccordionContentId(id);
  }, []);

  return (
    <AccordionContentStyle
      ref={ref}
      active={expanded}
      aria-hidden={!expanded}
      id={`accordion-section-${accordionContentId}`}
      role="region"
      aria-labelledby={`accordion-${accordionContentId}`}
      {...rest}
      isInverted={invertStyles}
    >
      {children}
    </AccordionContentStyle>
  );
});

export default AccordionContent;