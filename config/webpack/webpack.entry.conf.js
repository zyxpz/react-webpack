/**
 * 对用户写入的entry处理
 */

const entryBuild = require('../entry/entry');

let returnData = {};
entryBuild.map(t => {
  returnData[t.name] = [`./entryBuild/${t.name}.js`, t.title]
});

module.exports = returnData;