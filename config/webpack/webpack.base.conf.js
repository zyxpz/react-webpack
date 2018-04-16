/**
 * webpack 公共配置
 */

const setEntry = require('../entry/entry');



let config = {
  entry: buildEntry(setEntry),
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".pcss", ".less"],
  }
};

/**
 * 对用户写入的entry处理
 */
function buildEntry(d) {
  let returnData,
  name;
  d.map(t => {
    name = t.name
    returnData = {
      name: `./entryBuild/${name}.js`
    }
  })
  console.log(returnData);
  return returnData;
}

module.exports = config;