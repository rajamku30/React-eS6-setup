const path = require('path')
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env.name' : JSON.stringify('SVB local environment')
        }),
        new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
        hot: true,
        open: true,
        port: 1000,
      },
}