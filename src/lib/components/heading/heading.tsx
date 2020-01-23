/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '../../../theme/styled';
// import { forwardRef, HTMLProps, FC } from 'react';

import { typography, space, color, variant } from 'styled-system';

// type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface Props {
  as?: string;
  children: JSX.Element | string;
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
        color: 'primary',
        lineHeight: 'heading',
        fontWeight: 'heading'
      }
    }
  })
);

const Heading = styled(({ as, ...rest }) => <HeadingBase as={as} {...rest} />)<{
  active: boolean;
}>({
  color: 'red'
});

// const Heading = forwardRef<
//   HTMLHeadingElement,
//   Props & HTMLProps<HTMLHeadingElement>
// >(({ as, children, ...rest }: Props, ref) => (
//   <HeadingBase
//     {...rest}
//     // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//     // @ts-ignore
//     as={as}
//     mt={2}
//     mb={4}
//     ref={ref}
//   >
//     {children}
//   </HeadingBase>
// ));

// Heading.displayName = 'Heading';

export default Heading;
