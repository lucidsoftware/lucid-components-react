import * as React from 'react';
import styled from '../../../../theme/styled';
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  variant
} from 'styled-system';

import { VariantProps } from '../../../../types';
import FieldContext from '../field/field-context';

interface Props extends TypographyProps, SpaceProps, VariantProps {}

const TextInputBase = styled.input<Props>(
  space,
  typography,
  variant({
    variants: {
      default: {
        fontSize: 3,
        border: '1px solid lightgrey',
        padding: 2,
        borderRadius: '3px'
      },
      floating: {
        fontSize: 3,
        border: 'none',
        padding: 0,
        borderRadius: '0',
        outline: 'none'
      }
    }
  }),
  {
    width: '100%'
  }
);

const TextInput = styled(({ placeholder, variant = 'default', ...rest }) => {
  const context = React.useContext(FieldContext);
  console.log(context);
  if (context.enableFloating) {
    variant = 'floating';
    placeholder = '';
  }

  const onChange = (evt: any) => {
    const { value } = evt.currentTarget;
    if (value.length) {
      context.setIsFloating(true);
    } else {
      context.setIsFloating(false);
    }
    console.log(value);
  };

  return (
    <TextInputBase
      onChange={onChange}
      {...rest}
      variant={variant}
      placeholder={placeholder}
    />
  );
})<Props>();

export default TextInput;
