import { Accordion as ReactAccordion } from 'react-accessible-accordion';
import {
  layout,
  LayoutProps,
  BorderProps,
  border,
  space,
  SpaceProps
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
    VariantProps {}

const AccordionBase = styled(ReactAccordion)<AccordionProps>(
  border,
  layout,
  space
);

const Accordion = Object.assign(withTheme(AccordionBase), {
  Panel: AccordionPanel,
  Item: AccordionItem,
  Heading: AccordionHeading,
  Button: AccordionButton
});

export default Accordion;
