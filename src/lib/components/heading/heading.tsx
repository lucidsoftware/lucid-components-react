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
  ColorProps
} from 'styled-system';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props extends ColorProps, SpaceProps, TypographyProps, VariantProps {
  as?: HeadingType;
  children: ReactNode;
}

const HeadingBase = styled('h1')(
  typography,
  space,
  color,
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
  })
);

const Heading = styled(({ as, ...rest }) => <HeadingBase as={as} {...rest} />)<
  Props
>();

export default Heading;