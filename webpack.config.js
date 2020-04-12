const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: "/dist"
  },
  module: {
    rules: [
        {
            test: /\.js$|.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { 
            test: /\.scss$|.css$/, 
            loader: 'style-loader'
        },
        {
            test: /\.scss$|.css$/, 
            use: 'css-loader' 
        },
        { 
            test: /\.scss$/,
            loader: 'sass-loader' 
        }
    ]
  }
};