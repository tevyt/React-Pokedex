var webpack = require('webpack'); //eslint-disable-line no-undef

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') { //eslint-disable-line no-undef
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = { //eslint-disable-line no-undef
  entry: getEntrySources(['babel-polyfill', './src/index.js']),
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    }, 
    {
      test: /\.scss$/,
      loaders: 'style-loader!css-loader!sass-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    }, 
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
    }]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: __dirname +'/dist', //eslint-disable-line no-undef
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};      