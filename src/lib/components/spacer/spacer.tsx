/** @jsx jsx */
import { jsx } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { ThemeProps } from '../../../theme/theme';

import { SpacerItem, SpacerProps } from './spacer.styles';

import { FC } from 'react';

const SpacerBase: FC<
  ThemeProps & JSX.IntrinsicElements['div'] & SpacerProps
> = ({ className, theme, size, ...rest }) => {
  return <SpacerItem theme={theme} size={size} className={className} />;
};

const Spacer = withTheme(SpacerBase);
export default Spacer;
