const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const configWebpack = require('./webpack.config');

module.exports = (app) => {
  const compiler = webpack(configWebpack);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: configWebpack.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
};
