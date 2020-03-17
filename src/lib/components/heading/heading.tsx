import React, { ReactNode } from 'react';
import styled from '../../../theme/styled';
import { VariantProps } from '../../../types';

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

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props
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
    prop: 'variant',
    scale: 'headings',
    variants: {
      heading: {
        color: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading'
      },
      subheading: {
        color: 'grey',
        lineHeight: 'heading',
        fontWeight: 'heading'
      }
    }
  }),
  color,
  layout,
  space,
  typography
);

const Heading = styled(({ as, ...rest }) => <HeadingBase as={as} {...rest} />)<
  Props
>();

export default Heading;
