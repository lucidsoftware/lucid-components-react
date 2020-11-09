import React from 'react';
import merge from 'lodash/merge';
import get from 'lodash/get';
// import { useState, useEffect } from '@storybook/client-api';
// import { FORCE_RE_RENDER } from '@storybook/core-events';
// import addons from '@storybook/addons';

const getTheme = ({
  mode,
  baseTheme
}) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  })

export const withThemeProvider = ({
  ThemeProvider,
  theme
}) => (Story, context) => {
  const { value } = context.globals.withThemeSwitcher || 'chart';
  const currentTheme = getTheme({ mode: value, baseTheme: theme });

  return (
    <ThemeProvider theme={currentTheme}>
      <Story {...context} />
    </ThemeProvider>
  )
};

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
