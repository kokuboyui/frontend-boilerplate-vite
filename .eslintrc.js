module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    // 競合を避けるため、prettierは一番最後に書く
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'import',
    'jsx-a11y',
    'unused-imports',
  ],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // eslint ----------------------------------
    // objectの.以外のアクセスを許可する
    'dot-notation': 'off',

    'class-methods-use-this': 'off',

    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
    ],
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',

    // typescript-eslint ----------------------------------
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],

    // React Hooks ----------------------------------
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React ----------------------------------
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // plugin ----------------------------------
    // 不要なimportを削除
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports-ts': 'warn',
    // import順の設定
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          // styles
          // 最後尾にしたいのでgroupをindex扱いにする
          { pattern: './**.module.scss', group: 'index', position: 'before' },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.mock.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
  ],
  // react使用時
  // settings: {
  //   react: {
  //     version: require('./package.json').dependencies.react,
  //   },
  // },
};
