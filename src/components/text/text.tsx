import React from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { VariantProps } from '../../types/types';
import textStyles from '../../theme/typography';

export type TextTagType = React.ElementType | keyof JSX.IntrinsicElements;

export interface TextProps extends VariantProps {
  as?: TextTagType;
}

const TextBase = styled('p')(
  variant({
    variants: {
      ...textStyles
    }
  })
);

const Text = styled(({ as, ...rest }: { as?: TextTagType }) => (
  <TextBase as={as} {...rest} />
))<TextProps>();

export default Text;
