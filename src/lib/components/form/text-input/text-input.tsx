import * as React from 'react';
import styled from '../../../../theme/styled';
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  variant as variants
} from 'styled-system';

import { VariantProps } from '../../../../types';
import FieldContext from '../field/field-context';
import { FloatingStatus } from '../field/field';

interface Props extends TypographyProps, SpaceProps, VariantProps {
  validate?: boolean;
  validator?: (event: string) => boolean;
}

const TextInputBase = styled.input<Props>(
  space,
  typography,
  variants({
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
        borderRadius: '3px',
        padding: 2,
        paddingLeft: 2,
        paddingTop: '16px',
        paddingBottom: '16px',
        '[disabled]': {
          background: 'purple'
        },
        '&[data-floating="true"]': {
          paddingTop: '20px',
          paddingBottom: '12px'
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
  ({
    validator,
    validate,
    placeholder,
    variant = FloatingStatus.Default,
    ...rest
  }) => {
    const {
      hasFocus,
      setHasFocus,
      enableFloating,
      isFloating,
      setIsFloating
    } = React.useContext(FieldContext);
    const [isValid, setIsValid] = React.useState();

    if (enableFloating) {
      variant = 'floating';
      placeholder = '';
    }

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = evt.currentTarget;
      setIsFloating(value.length > 0);
      if (validate && validator) {
        setIsValid(validator(evt));
      }
    };

    const onFocus = () => {
      if (!hasFocus) {
        setHasFocus(true);
      }
    };

    const onBlur = () => {
      if (hasFocus) {
        setHasFocus(false);
      }
    };

    return (
      <TextInputBase
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        variant={variant}
        placeholder={placeholder}
        data-valid={isValid}
        data-floating={enableFloating && isFloating}
      />
    );
  }
)<Props>();

export default TextInput;
