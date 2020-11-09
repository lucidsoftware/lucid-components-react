import React from 'react';
import ThemeSelector from './components/theme-selector';
import { addons, types } from '@storybook/addons';
import { ADDON_ID } from './constants';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'withThemeSwitcher',
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: () => (
      <ThemeSelector />
    ),
  });
});
