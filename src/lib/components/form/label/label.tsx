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
        color: 'lightgrey',
        height: '100%',
        transition: 'all .15s ease-out',
        display: 'flex',
        alignItems: 'center',
        lineHeight: '1'
      }
    }
  })
);

const Label = styled(({ activeColor, variant = 'default', ...rest }) => {
  const { enableFloating, isFloating } = React.useContext(FieldContext);
  let style = {};

  if (enableFloating) {
    variant = 'floating';
  }

  if (enableFloating && isFloating) {
    style = {
      transform: 'translateY(-100%)',
      color: activeColor ?? 'black'
    };
  }

  return (
    <LabelBase
      {...rest}
      floating={enableFloating}
      style={style}
      variant={variant}
    />
  );
})<Props>();

export default Label;
