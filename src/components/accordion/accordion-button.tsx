import React from 'react';
import { AccordionItemButton } from 'react-accessible-accordion';
import {
  TypographyProps,
  typography,
  SpaceProps,
  space,
  variant
} from 'styled-system';
import styled from '@emotion/styled';

import Icon, { IconType } from '../icon/icon';
import { VariantProps } from '../../types/types';

export interface AccordionButtonProps
  extends TypographyProps,
    SpaceProps,
    VariantProps {
  className?: string;
  hasArrow?: boolean;
}

const StyledAccordionButton = styled(AccordionItemButton)(
  variant({ scale: 'accordion.button' }),
  typography,
  space
);

const AccordionButton: React.FC<AccordionButtonProps> = ({
  children,
  className,
  hasArrow,
  variant = 'default'
}) => (
  <StyledAccordionButton
    className={className}
    css={{
      '& > .accordionButtonArrow': {
        transition: 'transform 0.15s ease-out'
      }
    }}
    variant={variant}
  >
    {children}
    {hasArrow && (
      <Icon className="accordionButtonArrow" type={IconType.CarotRight} />
    )}
  </StyledAccordionButton>
);

export default AccordionButton;
