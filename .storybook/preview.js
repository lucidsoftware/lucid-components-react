import { themes } from '@storybook/theming';

import { withThemeProvider } from './theme-switcher-addon/decorators';

import theme from '../src/theme/theme';
import ThemeProvider from '../src/components/theme-provider/theme-provider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  docs: {
    theme: themes.dark
  },
  layout: 'centered',
  withThemeSwitcher: {
    defaultValue: 'chart',
    values: [
      { name: 'Lucidchart', value: 'chart' },
      { name: 'Lucid Co', value: 'co' },
      { name: 'Lucid EDU', value: 'edu' },
      { name: 'Lucidpress', value: 'press' },
      { name: 'Lucidspark', value: 'spark' },
    ],
  },
};

export const decorators = [
  withThemeProvider({ ThemeProvider, theme })
];
