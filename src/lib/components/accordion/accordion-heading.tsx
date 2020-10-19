import { AccordionItemHeading } from 'react-accessible-accordion';
import {
  TypographyProps,
  typography,
  SpaceProps,
  space,
  FlexboxProps,
  flexbox,
  border,
  BorderProps,
  BackgroundProps,
  background
} from 'styled-system';

import styled from '../../../theme/styled';

export interface Props
  extends BackgroundProps,
    BorderProps,
    TypographyProps,
    SpaceProps,
    FlexboxProps {}

const AccordionHeading = styled(AccordionItemHeading)<Props>(
  {
    width: '100%'
  },
  background,
  border,
  flexbox,
  typography,
  space
);
export default AccordionHeading;
