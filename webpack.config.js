// const path = require("path");

// module.exports = {
//   entry: "./index.js", // Ваш входной файл
//   output: {
//     path: path.resolve(__dirname, "dist"), // Папка для сохранения собранного кода
//     filename: "bundle.js", // Имя собранного файла
//   },
// };







const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "development",
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  plugins: [new HtmlWebPackPlugin({
    template: "./index.html",
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: './styles.css', to: 'styles.css' }, 
    ],
  }),
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
