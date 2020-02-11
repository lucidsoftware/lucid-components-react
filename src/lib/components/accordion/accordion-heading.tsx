import { AccordionItemHeading } from 'react-accessible-accordion';
import styled from '../../../theme/styled';
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

interface Props
  extends BackgroundProps,
    BorderProps,
    TypographyProps,
    SpaceProps,
    FlexboxProps {}

const AccordionHeading = styled(AccordionItemHeading)<Props>(
  background,
  border,
  flexbox,
  typography,
  space,
  {
    width: '100%'
  }
);
export default AccordionHeading;
