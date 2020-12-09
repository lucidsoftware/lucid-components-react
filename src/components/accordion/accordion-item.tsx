import { AccordionItem as ReactAccordionItem } from 'react-accessible-accordion';
import {
  compose,
  flexbox,
  layout,
  variant,
  FlexboxProps,
  LayoutProps
} from 'styled-system';
import styled from '@emotion/styled';

import { VariantProps } from '../../types/types';

export interface AccordionItemProps
  extends FlexboxProps,
    LayoutProps,
    VariantProps {}

const accordionItemStyleProps = compose(flexbox, layout);

const AccordionItem = styled(ReactAccordionItem)<AccordionItemProps>(
  {
    display: 'flex',
    flex: '0 1 100%',
    flexWrap: 'wrap'
  },
  variant({
    scale: 'accordion.item'
  }),
  accordionItemStyleProps
);

export default AccordionItem;
