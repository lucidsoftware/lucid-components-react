import { AccordionItemPanel } from 'react-accessible-accordion';
import {
  TypographyProps,
  typography,
  SpaceProps,
  space,
  variant,
  border,
  BorderProps,
  BackgroundProps,
  background
} from 'styled-system';
import styled from '@emotion/styled';

import { VariantProps } from '../../types/types';

export interface AccordionPanelProps
  extends BackgroundProps,
    TypographyProps,
    SpaceProps,
    VariantProps,
    BorderProps {}

const AccordionPanel = styled(AccordionItemPanel)<AccordionPanelProps>(
  variant({
    scale: 'accordion.panel'
  }),
  background,
  typography,
  space,
  border
);

AccordionPanel.defaultProps = {
  variant: 'default'
};

export default AccordionPanel;
