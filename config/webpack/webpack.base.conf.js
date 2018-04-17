/**
 * webpack 公共配置
 */
const entry = require('./webpack.entry.conf');

let newEntry = {}, k;

for (k in entry) {
  newEntry[k] = entry[k][0]
}

let config = {
  entry: newEntry,
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".pcss", ".less"],
  }
};

module.exports = config;