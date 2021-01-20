const path = require('path');
const merge = require('webpack-merge');
const webpackConfiguration = require('../webpack.config');

module.exports = merge(webpackConfiguration, {


    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        filename: '[name]-[contenthash].js',

    },




});