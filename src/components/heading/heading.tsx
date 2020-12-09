import React, { ReactNode } from 'react';
import {
  compose,
  typography,
  space,
  color,
  variant,
  TypographyProps,
  SpaceProps,
  ColorProps,
  layout,
  LayoutProps
} from 'styled-system';
import styled from '@emotion/styled';

import { VariantProps } from '../../types/types';
import { headingStyles } from '../../theme/components/headings';

export type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    VariantProps {
  as?: HeadingTagType;
  children: ReactNode;
}

const headingStyleProps = compose(color, layout, space, typography);

const HeadingBase = styled('h1')(
  variant({
    variants: {
      ...headingStyles
    }
  }),
  headingStyleProps
);

const Heading = styled(({ as, ...rest }: { as?: HeadingTagType }) => (
  <HeadingBase as={as} {...rest} />
))<HeadingProps>();

export default Heading;
