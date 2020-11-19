import React, { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import defaultTheme, { ThemeProps } from '../../theme/theme';

interface Props {
  children?: ReactNode | ReactNode[];
  theme?: Partial<ThemeProps['theme']>;
}

const ThemeProvider = ({ children, theme = defaultTheme }: Props) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
