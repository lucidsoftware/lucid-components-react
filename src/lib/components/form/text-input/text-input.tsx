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

interface Props extends TypographyProps, SpaceProps, VariantProps {
  validate?: boolean;
  validator?: (event: string) => boolean;
}

const TextInputBase = styled.input<Props>(
  space,
  typography,
  variant({
    variants: {
      default: {
        fontSize: 3,
        border: '1px solid lightgrey',
        padding: 2,
        borderRadius: '3px',
        '[disabled]': {
          background: 'purple'
        }
      },
      floating: {
        fontSize: 3,
        border: '1px solid lightgrey',
        padding: 3,
        borderRadius: '3px',
        paddingLeft: 2,
        paddingBottom: 2,
        '[disabled]': {
          background: 'purple'
        }
      }
    }
  }),
  {
    display: 'block',
    width: '100%'
  }
);

const TextInput = styled(
  ({ validator, validate, placeholder, variant = 'default', ...rest }) => {
    const context = React.useContext(FieldContext);
    const [isValid, setIsValid] = React.useState();

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
      if (validate && validator) {
        setIsValid(validator(evt));
      }
    };

    return (
      <TextInputBase
        {...rest}
        onChange={onChange}
        variant={variant}
        placeholder={placeholder}
        data-valid={isValid}
      />
    );
  }
)<Props>();

export default TextInput;
