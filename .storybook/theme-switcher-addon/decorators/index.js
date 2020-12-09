import React from 'react';
import merge from 'lodash/merge';
import get from 'lodash/get';

const getTheme = ({
  product,
  baseTheme
}) =>
  merge({}, baseTheme, {
    buttons: get(baseTheme.buttons.products, product, baseTheme.buttons),
    colors: get(baseTheme.colors.products, product, baseTheme.colors),
  })

export const withThemeProvider = ({
  ThemeProvider,
  theme
}) => (Story, context) => {
  const { value } = context.globals.withThemeSwitcher || 'chart';
  const currentTheme = getTheme({ product: value, baseTheme: theme });

  return (
    <ThemeProvider theme={currentTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
