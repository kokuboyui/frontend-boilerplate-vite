const httpProxy = require('http-proxy');
const { BASE_CONFIG } = require('./config');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({
    [`${BASE_CONFIG.folderNames.src}/${BASE_CONFIG.folderNames.assets}/`]: `${BASE_CONFIG.folderNames.assets}/`,
  });
  eleventyConfig.setBrowserSyncConfig({
    https: {
      key: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncKey}`,
      cert: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncCert}`,
    },
    callbacks: {
      ready: function (_err, browserSync) {
        const proxy = httpProxy.createProxyServer();

        // 8080で5050のデータを見れるようにする
        browserSync.addMiddleware('*', (req, res) => {
          proxy.web(req, res, {
            target: `https://localhost:${BASE_CONFIG.viteLocalPort}`,
            ssl: {
              key: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncKey}`,
              cert: `./${BASE_CONFIG.folderNames.key}/${BASE_CONFIG.browsersyncCert}`,
            },
            secure: false,
          });
        });
      },
    },
  });

  return {
    dir: {
      data: '../../../config',
      input: `${BASE_CONFIG.folderNames.src}/${BASE_CONFIG.folderNames.templates}/pages`,
      output: BASE_CONFIG.isProduction ? BASE_CONFIG.folderNames.out : '_tmp',
    },
    passthroughFileCopy: true,
  };
};
