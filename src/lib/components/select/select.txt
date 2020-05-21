/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import {
  SelectContainer,
  SelectWrapper,
  SelectField,
  SelectProps,
  SelectOption,
  SelectLabel,
  SelectLabelProps
} from './select.styles';

import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';
import { FC, createRef, useEffect, useState } from 'react';

// Question - So looking at the design Erin
// sent over (new SEO page), this isn't a traditional
// form drop down (like the OG specs). Question being,
// how do we reconcile this? Does that make sense?
const SelectBase: FC<ThemeProps &
  JSX.IntrinsicElements['select'] &
  SelectProps &
  SelectLabelProps> = ({
  className,
  theme,
  focus,
  value,
  hideLabel,
  label,
  options,
  ...rest
}) => {
  const ref = createRef<HTMLSelectElement>();

  useEffect(() => {
    if (focus && ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <SelectContainer>
      <SelectWrapper>
        {label && !hideLabel && (
          <SelectLabel hideLabel={hideLabel} label={label}>
            {label}
          </SelectLabel>
        )}
        <SelectField value={value} ref={ref} options={options}>
          {options.map((option: string) => (
            <SelectOption theme={theme} key={option} value={option}>
              {option}
            </SelectOption>
          ))}
        </SelectField>
      </SelectWrapper>
    </SelectContainer>
  );
};

const Select = withTheme(SelectBase);
export default Select;
