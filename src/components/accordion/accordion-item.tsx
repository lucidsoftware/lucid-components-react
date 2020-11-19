import { AccordionItem as ReactAccordionItem } from 'react-accessible-accordion';
import { flexbox, layout, FlexboxProps, LayoutProps } from 'styled-system';
import styled from '@emotion/styled';

export interface AccordionItemProps extends FlexboxProps, LayoutProps {}

const AccordionItem = styled(ReactAccordionItem)<AccordionItemProps>(
  flexbox,
  layout,
  {
    display: 'flex',
    flex: '0 1 100%',
    flexWrap: 'wrap'
  }
);

export default AccordionItem;
