import { Accordion as ReactAccordion } from 'react-accessible-accordion';
import {
  compose,
  layout,
  LayoutProps,
  BorderProps,
  border,
  space,
  SpaceProps,
  variant
} from 'styled-system';
import { withTheme } from '@emotion/react';
import styled from '@emotion/styled';

import AccordionItem from './accordion-item';
import AccordionHeading from './accordion-heading';
import AccordionPanel from './accordion-panel';
import AccordionButton from './accordion-button';
import { VariantProps } from '../../types/types';

export interface AccordionProps
  extends BorderProps,
    LayoutProps,
    SpaceProps,
    VariantProps {
  allowMultipleExpanded?: boolean;
  allowZeroExpanded?: boolean;
  preExpanded?: string[];
  className?: string;
  onChange?: (value: string[]) => void;
}

const accordionStyleProps = compose(border, layout, space);

const AccordionBase = styled(ReactAccordion)<AccordionProps>(
  variant({
    scale: 'accordion'
  }),
  accordionStyleProps
);

const Accordion = Object.assign(withTheme(AccordionBase), {
  Panel: AccordionPanel,
  Item: AccordionItem,
  Heading: AccordionHeading,
  Button: AccordionButton
});

export default Accordion;
