import React from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import textStyles from '../../theme/typography';

const Text = styled('p')<{
  textStyles?: string;
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}>(
  variant({
    prop: 'textStyles',
    variants: {
      ...textStyles
    }
  })
);

export default Text;
