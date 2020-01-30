/** @jsx jsx */
import { jsx } from '@emotion/core';

import styled from '../../../theme/styled';

export interface Props {
  className?: string;
  size: number;
}

const Spacer = styled.div<Props>(
  {
    width: '100%'
  },
  props => ({
    padding: `${props.theme.space[props.size]}px`
  })
);

export default Spacer;
