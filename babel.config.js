const { DEFAULT_EXTENSIONS } = require('@babel/core');
const { browserlist } = require('./package.json');
const browsersList = require('browserslist');
const browsers = browsersList(browserlist);

const BABEL_CONFIG = {
  extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
  exclude: /node_modules\/(?!(firebase)\/).*/,
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers,
        },
        // すべての変換を強制的に実行
        forceAllTransforms: true,
        // ESモジュールが保持
        modules: false,
        // 必要な polyfill のみを import させたい場合、'usage'を指定する（必須）
        useBuiltIns: 'usage',
        // Stage 4 未満のプロポーザルの polyfill も import される
        corejs: { version: 3, proposals: true },
        exclude: ['transform-typeof-symbol'],
      },
    ],
  ],
};

export default { BABEL_CONFIG };
