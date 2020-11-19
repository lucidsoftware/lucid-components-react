import React from 'react';
import merge from 'lodash/merge';
import get from 'lodash/get';
// import { useState, useEffect } from '@storybook/client-api';
// import { FORCE_RE_RENDER } from '@storybook/core-events';
// import addons from '@storybook/addons';

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
  console.log({value})
  const currentTheme = getTheme({ product: value, baseTheme: theme });
  console.log(currentTheme.buttons)
  return (
    <ThemeProvider theme={currentTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
