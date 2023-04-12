var dashboard; process.env.DASHBOARD;
var baseUrl;

try { dashboard = process.env.DASHBOARD.replace(' ', '');; } catch (error) { dashboard = undefined }
try { baseUrl = process.env.PUBLIC_URL.replace(' ', ''); } catch (error) { baseUrl = './' }

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: `./src/dashboards/${dashboard}/${dashboard}.tsx`,
  output: {
    path: `${__dirname}/build/${dashboard}/`,
    publicPath: prod ? baseUrl : '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/dashboards/${dashboard}/${dashboard}.html`,
    }),
    new MiniCssExtractPlugin(),
  ],
};