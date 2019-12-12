/** @jsx jsx */
import { jsx } from '@emotion/core';

import { forwardRef, useEffect, useState, useContext } from 'react';
import Icon, { IconType } from '../icon/icon';

import { ThemeProps } from '../../../theme/theme';

import { AccordionContext } from './accordion';
import { AccordionItemContext } from './accordion-item';

import {
  AccordionHeaderStyle,
  AccordionIconContainer,
  AccordionItemProps
} from './accordion.styles';

const AccordionHeader = forwardRef<
  HTMLButtonElement,
  ThemeProps & AccordionItemProps
>(({ theme, children, ...rest }, ref) => {
  const [accordionHeaderId, setAccordionHeaderId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { getAccordionHeaderId, toggleExpanded } = useContext(
    AccordionItemContext
  );

  const { invertStyles } = useContext(AccordionContext);

  useEffect(() => {
    const id = getAccordionHeaderId();
    setAccordionHeaderId(id);
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    toggleExpanded();
  };

  return (
    <AccordionHeaderStyle
      onClick={toggleAccordion}
      aria-expanded={isOpen}
      aria-controls={`accordion-section-${accordionHeaderId}`}
      id={`accordion-${accordionHeaderId}`}
      ref={ref}
      {...rest}
      isInverted={invertStyles}
    >
      {children}
      <AccordionIconContainer>
        {/* TODO: Icon doesn't currently rotate. @Lars, wanna expand this? */}
        <Icon type={IconType.CarotRight} rotation={isOpen ? 90 : 0} />
      </AccordionIconContainer>
    </AccordionHeaderStyle>
  );
});

export default AccordionHeader;