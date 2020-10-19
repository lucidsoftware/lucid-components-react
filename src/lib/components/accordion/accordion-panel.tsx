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

import styled from '../../../theme/styled';
import { VariantProps } from '../../../types';

export interface Props
  extends BackgroundProps,
    TypographyProps,
    SpaceProps,
    VariantProps,
    BorderProps {}

const AccordionPanel = styled(AccordionItemPanel)<Props>(
  variant({
    scale: 'accordion.panel',
    variants: {
      default: {
        backgroundColor: 'hsl(0, 0%, 96%)',
        paddingTop: 2,
        paddingRight: 4,
        paddingBottom: 2,
        paddingLeft: 4,
        borderBottomWidth: '1px',
        borderBottomColor: 'primary',
        borderBottomStyle: 'solid',
        color: 'black'
      }
    }
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
