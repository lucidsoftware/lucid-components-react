import { AccordionItemPanel } from 'react-accessible-accordion';
import {
  compose,
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
    BorderProps,
    VariantProps {}

const panelStyleProps = compose(background, typography, space, border);

const AccordionPanel = styled(AccordionItemPanel)<AccordionPanelProps>(
  variant({
    scale: 'accordion.panel'
  }),
  panelStyleProps
);

export default AccordionPanel;
