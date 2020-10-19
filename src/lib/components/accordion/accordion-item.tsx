import { AccordionItem as ReactAccordionItem } from 'react-accessible-accordion';
import { flexbox, layout, FlexboxProps, LayoutProps } from 'styled-system';

import styled from '../../../theme/styled';

export interface Props extends FlexboxProps, LayoutProps {}

const AccordionItem = styled(ReactAccordionItem)<Props>(flexbox, layout, {
  display: 'flex',
  flex: '0 1 100%',
  flexWrap: 'wrap'
});

export default AccordionItem;
