// base --------------------------------
const META_DATA = require('./meta');

// base settings --------------------------------
const envNames = {
  localhost: 'localhost',
  development: 'development',
  staging: 'staging',
  production: 'production',
};

const env = process.env.NODE_ENV || envNames.localhost;
const isProduction = env === envNames.production;
const mode = isProduction ? envNames.production : envNames.development;

// パス
const basePath = '/';
// サイト名
const siteName = 'Frontend Boiler Plate';
// サイトのURL
const siteUrl = 'https://hogehoge.co.jp';

// server settings --------------------------------
const viteLocalPort = 5050;
const browsersyncKey = 'localhost-key.pem';
const browsersyncCert = 'localhost.pem';

// folder name --------------------------------
const folderNames = {
  develop: 'develop',
  production: 'production',
  src: 'src',
  public: 'public',
  templates: 'templates',
  scripts: 'scripts',
  styles: 'styles',
  assets: 'assets',
  images: 'images',
  icons: 'icons',
  css: 'css',
  js: 'js',
  og: 'og',
  out: 'out',
  key: 'key',
};

// OGの基本設定
const og = {
  locale: 'ja_JP',
  siteName: 'siteName',
  // 共通のtitleとdescriptionの場合
  commonTitle: 'title',
  commonDescription: 'description',
  url: siteUrl,
  type: 'article',
  image: `${siteUrl}/${folderNames.assets}/${folderNames.images}/${folderNames.og}/img_og.jpg`,
  card: 'summary_large_image',
  meta: META_DATA.meta,
};

// assetのパス
const assetPath = `${basePath}${folderNames.assets}/`;

exports.BASE_CONFIG = {
  siteName,
  siteUrl,
  env,
  isProduction,
  mode,
  basePath,
  folderNames,
  viteLocalPort,
  browsersyncKey,
  browsersyncCert,
  templatesConfig: {
    isProduction,
    viteLocalPort,
    siteUrl,
    siteName,
    path: basePath,
    imagePath: `${assetPath}${folderNames.images}/`,
    iconPath: `${assetPath}${folderNames.images}/${folderNames.icons}/`,
    cssPath: `${assetPath}${folderNames.css}/`,
    jsPath: `${assetPath}${folderNames.js}/`,
    templatePath: `${assetPath}${folderNames.templates}/`,
    og,
  },
};
