/**
 * webpack 公共配置
 */

let config = {
  entry: {
    'index': './entryBuild/index.js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
  }
};
module.exports = config;