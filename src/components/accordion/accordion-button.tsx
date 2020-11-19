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
  hasArrow?: boolean;
  className?: string;
}

const StyledAccordionButton = styled(AccordionItemButton)(
  variant({ scale: 'accordion.button' }),
  typography,
  space
);

const AccordionButton: React.FC<AccordionButtonProps> = ({
  hasArrow,
  variant = 'default',
  children,
  className
}) => (
  <StyledAccordionButton className={className} variant={variant}>
    {children}
    {hasArrow && <Icon type={IconType.CarotRight} />}
  </StyledAccordionButton>
);

export default AccordionButton;
