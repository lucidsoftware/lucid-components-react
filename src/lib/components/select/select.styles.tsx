import { jsx, css } from '@emotion/core';
import styled from '../../../theme/styled';

import { ThemeProps } from '../../../theme/theme';

export interface SelectProps {
  className?: string;
  value?: string;
  focus?: boolean;
  options: string[];
}

export interface SelectLabelProps {
  label?: string;
  hideLabel?: boolean;
}

const ContainerBaseStyles = (props: any) =>
  css({
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    fontSize: `${props.theme.fontSizes[0]}px`,
    fontWeight: props.theme.fontWeights.bolder,
    position: 'relative',
    // once merged with the input
    // margin: props.theme.forms.container.margin
    margin: '8px 16px'
  });

export const SelectContainer = styled('div')`
  ${ContainerBaseStyles}
`;

const WrapperBaseStyles = () =>
  css({
    position: 'relative',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap'
  });

export const SelectWrapper = styled('div')`
  ${WrapperBaseStyles}
`;

const SelectBaseStyles = (props: ThemeProps) =>
  css({
    display: 'block',
    width: '100%',
    padding: props.theme.forms.select.padding,
    border: props.theme.forms.select.border,
    height: props.theme.forms.select.height,
    fontSize: props.theme.forms.select.fontSize,
    outline: props.theme.forms.select.outline,
    backgroundColor: props.theme.forms.select.backgroundColor,
    borderRadius: props.theme.forms.select.borderRadius,

    ':focus': {
      borderColor: props.theme.forms.select.focus.borderColor
    }
  });

export const SelectField = styled('select')<SelectProps>`
  ${SelectBaseStyles}
`;

const OptionsBaseStyles = (props: ThemeProps) =>
  css({
    fontWeight: props.theme.fontWeights.body,
    textRendering: 'optimizeLegibility',
    textAlign: 'left'
  });

export const SelectOption = styled('option')`
  ${OptionsBaseStyles}
`;

const LabelBaseStyles = (props: ThemeProps) =>
  css({
    fontWeight: props.theme.fontWeights.body,
    textRendering: 'optimizeLegibility',
    textAlign: 'left',
    width: '100%'
  });

export const SelectLabel = styled('label')<SelectLabelProps>`
  ${LabelBaseStyles}
`;
