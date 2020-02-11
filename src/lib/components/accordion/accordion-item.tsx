import { AccordionItem as ReactAccordionItem } from 'react-accessible-accordion';

import styled from '../../../theme/styled';
import { flexbox, layout, FlexboxProps, LayoutProps } from 'styled-system';

interface Props extends FlexboxProps, LayoutProps {}

const AccordionItem = styled(ReactAccordionItem)<Props>(flexbox, layout, {
  display: 'flex',
  flex: '0 1 100%',
  flexWrap: 'wrap'
});

export default AccordionItem;
