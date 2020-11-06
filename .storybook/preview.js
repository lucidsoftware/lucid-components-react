import React from 'react';
import ThemeProvider from '../src/components/theme-provider/theme-provider';

export const decorators = [
  (Story) => <ThemeProvider><Story/></ThemeProvider>
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  layout: 'centered'
}
