const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    './theme-switcher-addon/register.js'
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  babel: async (options) => {
    const customPlugins = [
      require.resolve('@emotion/babel-plugin')
    ];

    const { presets } = options;

    const storybookPresets = presets.map(preset => {
      if (preset[0].match(/@babel\/preset-react/gi)) {
        return [
          preset[0],
          {
            ...preset[1],
            importSource: '@emotion/react'
          }
        ]
      }

      return preset
    })

    return {
      ...options,
      plugins: [
        ...options.plugins,
        ...customPlugins
      ],
      presets: storybookPresets
    };
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        },
      },
    }
  },
}
