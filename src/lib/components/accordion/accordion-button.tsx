import { AccordionItemButton } from 'react-accessible-accordion';
import styled from '../../../theme/styled';
import {
  TypographyProps,
  typography,
  SpaceProps,
  space,
  variant
} from 'styled-system';

import { VariantProps } from '../../../types';

export interface Props extends TypographyProps, SpaceProps, VariantProps {}

const AccordionButton = styled(AccordionItemButton)<Props>(
  variant({
    scale: 'accordion.button',
    variants: {
      default: {
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 2,
        paddingRight: 2,
        borderBottomWidth: '1px',
        borderBottomColor: 'lightgrey',
        borderBottomStyle: 'solid',
        '&:hover, &:focus': {
          borderBottomColor: 'primary'
        },
        '&[aria-expanded="true"]': {
          borderBottomColor: 'lightgrey'
        }
      }
    }
  }),
  {
    cursor: 'pointer'
  },
  typography,
  space
);

AccordionButton.defaultProps = {
  variant: 'default'
};

export default AccordionButton;
