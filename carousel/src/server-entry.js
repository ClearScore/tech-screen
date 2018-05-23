require('./config/environment');
require('./app/polyfills/node-fetch');
require('./server/utils/assets-helper');

function getAssets() {
  return (process.env.NODE_ENV === 'production')
    ? require('../compiled/webpack-assets.json')
    : { app: { js: '/static/app.js', css: '/static/app.css' }, polyfills: { js: '/static/polyfills.js' } };
}
const webpackAssets = getAssets();
const mapWebpackAssets = require('./server/utils/mapWebpackAssets');

const assets = mapWebpackAssets(webpackAssets);
const createServer = require('./server/server');

createServer(assets).listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`);
});
