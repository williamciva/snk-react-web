const prod = process.env.NODE_ENV === 'production';
const dashboard = process.env.DASHBOARD

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: `./src/dashboards/${dashboard}/${dashboard}.tsx`.replaceAll(" ", ""),
  output: {
    path: `${__dirname}/build/${dashboard}/`.replaceAll(" ", ""),
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
      template: `./src/dashboards/${dashboard}/${dashboard}.html`.replaceAll(" ", ""),
    }),
    new MiniCssExtractPlugin(),
  ],
};