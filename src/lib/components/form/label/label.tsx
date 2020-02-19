import * as React from 'react';
import styled from '../../../../theme/styled';
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  variant
} from 'styled-system';

import FieldContext from '../field/field-context';
import { FloatingStatus } from '../field/field';

interface Props extends TypographyProps, SpaceProps {
  activeColor?: string;
}

interface LabelBaseProps extends Props {
  floating?: boolean;
}

const LabelBase = styled.label<LabelBaseProps>(
  space,
  typography,
  variant({
    variants: {
      default: {
        fontSize: 3,
        '& + input': {
          marginTop: 2
        }
      },
      floating: {
        fontSize: 3,
        position: 'absolute',
        top: '0',
        left: 2,
        color: 'lightgrey',
        height: '100%',
        transition: 'all .15s ease-out',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '1',
        pointerEvents: 'none',
        transform: 'translateX(1px)',
        '&[data-floating="true"]': {
          transform: 'translateY(-24%) scale(.75)',
          transformOrigin: 'left center',
          letterSpacing: '.04rem',
          color: 'black',
          pointerEvents: 'auto'
        }
      }
    }
  })
);

const Label = styled(({ variant = FloatingStatus.Default, ...rest }) => {
  const { enableFloating, isFloating } = React.useContext(FieldContext);

  variant = enableFloating ? FloatingStatus.Floating : variant;

  return (
    <LabelBase
      {...rest}
      floating={enableFloating}
      variant={variant}
      data-floating={enableFloating && isFloating}
    />
  );
})<Props>();

export default Label;
