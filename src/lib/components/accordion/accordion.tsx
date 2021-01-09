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

import styled from '../../../theme/styled';
import AccordionItem from './accordion-item';
import AccordionHeading from './accordion-heading';
import AccordionPanel from './accordion-panel';
import AccordionButton from './accordion-button';
import { VariantProps } from '../../../types';

interface Props extends BorderProps, LayoutProps, SpaceProps, VariantProps {}

const AccordionBase = styled(ReactAccordion)<Props>(border, layout, space);

const Accordion = Object.assign(withTheme(AccordionBase), {
  Panel: AccordionPanel,
  Item: AccordionItem,
  Heading: AccordionHeading,
  Button: AccordionButton
});

export default Accordion;
