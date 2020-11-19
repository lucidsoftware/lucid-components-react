import React, { ReactNode } from 'react';
import {
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

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    TypographyProps,
    VariantProps {
  as?: HeadingType;
  children: ReactNode;
}

const HeadingBase = styled('h1')(
  variant({
    scale: 'headings'
    // variants: {
    //   heading: {
    //     color: 'heading',
    //     lineHeight: 'heading',
    //     fontWeight: 'heading'
    //   },
    //   subheading: {
    //     color: 'grey',
    //     lineHeight: 'heading',
    //     fontWeight: 'heading'
    //   }
    // }
  }),
  color,
  layout,
  space,
  typography
);

const Heading = styled(({ as, ...rest }: { as?: HeadingType }) => (
  <HeadingBase as={as} {...rest} />
))<HeadingProps>();

export default Heading;
