import { css } from '@emotion/core';
import styled from '../../../theme/styled';

import { ThemeProps } from '../../../theme/theme';

export interface SpacerProps {
  className?: string;
  size: number;
}

const SpacerBaseStyles = (props: ThemeProps) =>
  css({
    width: '100%'
  });

export const SpacerItem = styled('div')<SpacerProps>`
  ${SpacerBaseStyles};
  padding: ${props => props.theme.spacer[props.size]}px;
`;
