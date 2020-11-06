import React, { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import defaultTheme, { ThemeProps } from '../../theme/theme';
import isEmpty from '../../utils/isEmpty';

interface Props {
  children?: ReactNode | ReactNode[];
  theme?: Partial<ThemeProps['theme']>;
}

const ThemeProvider = ({ children, theme = defaultTheme }: Props) => {
  console.log({ defaultTheme }, !isEmpty(theme));
  return (
    <EmotionThemeProvider theme={theme || defaultTheme}>
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
