/**
 * webpack 公共配置
 */

let config = {
  entry: {
    'index': './entryBuild/index.js',
    'index2': './entryBuild/index2.js'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".pcss", ".less"],
  }
};
module.exports = config;