const { DEFAULT_EXTENSIONS } = require('@babel/core');
const path = require('path');
const pkg = require(path.resolve(process.cwd(), 'package.json'));
const browserslist = require('browserslist');
const browsers = browserslist(pkg.browserslist);

const presets = [
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
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-optional-chaining',
];

module.exports = {
  presets,
  plugins,
  babelrcRoots: ['.'],
};
