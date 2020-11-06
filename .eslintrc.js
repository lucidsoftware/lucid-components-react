module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    react: {
      version: 'detect'
    },
    jest: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  globals: {
    MktoForm: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'import',
    'emotion',
    'jest'
  ],
  rules: {
    // 0 === 'off', 1 === 'warn', 2 === 'error'
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 0,
    '@typescript-eslint/naming-convention': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true }
    ],
    '@typescript-eslint/quotes': [2, 'single', { avoidEscape: true }],
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/semi': 2,
    '@typescript-eslint/unbound-method': 0,
    'emotion/styled-import': 2,
    'emotion/no-vanilla': 2,
    'emotion/syntax-preference': [2, 'object'],
    'import/no-unresolved': 0,
    'import/newline-after-import': 2,
    'import/order': [2,
      {
        groups: [
          'builtin',
          'external',
          [
            'internal',
            'sibling',
            'parent',
            'index',
          ],
          'object',
          'unknown'
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'components/layout',
            group: 'builtin',
            position: 'before'
          }
        ]
      }
    ],
    'jest/no-mocks-import': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-restricted-imports': [2,
      {
        paths: [
          {
            name: 'gatsby',
            importNames: ['Link'],
            message: "You should import your site's link component"
          }
        ]
      }
    ],
    'react/display-name': [0, { ignoreTranspilerName: false }],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-curly-spacing': [2,
      {
        when: 'never',
        allowMultiline: true
      }
    ],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-first-prop-new-line': [2,
      'multiline-multiprop'
    ],
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: true }],
    'react/jsx-no-undef': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-sort-props': [
      2,
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: true,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/sort-comp': [2,
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: [
            '/^render.+$/',
            'render'
          ],
        },
      }
    ],
    'react/jsx-wrap-multilines': [2,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-tag-spacing': [2,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }
    ],
    'react/no-unused-state': 2,
    'react/no-typos': 2,
    'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
    'react/jsx-curly-newline': [2,
      {
        multiline: 'consistent',
        singleline: 'consistent',
      }
    ],
    'sort-vars': [2, { ignoreCase: true }]
  }
};
