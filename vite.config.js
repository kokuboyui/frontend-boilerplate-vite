import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';
const { BABEL_CONFIG } = require('./babel.config.js');
const { BASE_CONFIG } = require('./config');

export default defineConfig({
  // ローカル番号を非表示に(11yのローカルで確認するので)
  logLevel: 'warn',
  server: {
    host: '0.0.0.0',
    port: BASE_CONFIG.viteLocalPort,
    // ポートが使用されている時、代替を探さず終了
    strictPort: true,
    https: {
      key: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncKey}`,
      cert: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncCert}`,
    },
  },
  build: {
    outDir: BASE_CONFIG.folderNames.out,
    manifest: true,
    rollupOptions: {
      plugins: [babel(BABEL_CONFIG)],
      output: {
        // vendorファイルを分けたい時使用。chunkFileNamesに吐き出される。
        manualChunks: {
          index: [],
          // 例)package.jsonの全てのdependenciesの場合
          // index: Object.entries(dependencies).map(([key]) => (key)),
          // 例)個別
          // react: ['react'],
          // 'react-dom': ['react-dom'],
        },
        // The pattern to use for chunks created from entry points(https://rollupjs.org/guide/en/#outputentryfilenames)
        entryFileNames: `${BASE_CONFIG.folderNames.assets}/${BASE_CONFIG.folderNames.js}/[name].bundle.js`,
        // The pattern to use for naming shared chunks created when code-splitting(https://rollupjs.org/guide/en/#outputchunkfilenames)
        chunkFileNames: `${BASE_CONFIG.folderNames.assets}/${BASE_CONFIG.folderNames.js}/[name].vendor.bundle.js`,
        // The pattern to use for naming custom emitted assets to include in the build output(https://rollupjs.org/guide/en/#outputassetfilenames)
        assetFileNames: `${BASE_CONFIG.folderNames.assets}/${BASE_CONFIG.folderNames.css}/index.css`,
      },
      input: {
        // 名前[name]になる
        common: `./${BASE_CONFIG.folderNames.src}/${BASE_CONFIG.folderNames.scripts}/common.ts`,
        top: `./${BASE_CONFIG.folderNames.src}/${BASE_CONFIG.folderNames.scripts}/top.ts`,
      },
    },
  },
});
