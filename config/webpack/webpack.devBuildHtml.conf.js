const fs = require('fs');
const rimraf = require('rimraf');
const webpackFile = require('./webpack.file.conf');
const entryBuild = require('../entry/entry');
const webpackComConf = require('./webpack.com.conf');

/**
 * 删除开发目录
 */
rimraf.sync(webpackFile.devDirectory);

/**
 * 创建开发目录
 */
fs.mkdirSync(webpackFile.devDirectory);

let htmlCont = fs.readFileSync('tpl/index.html', 'utf-8');

let scriptInsert = `
<script src=js/manifest.js></script>
<script src=js/vendor.js></script>
<script src=js/common.js></script>
<script src=js/key.js></script>
`;

htmlCont = htmlCont.replace('</body>', `${scriptInsert}</body>`);

entryBuild.map(data => {
  fs.writeFile(`${webpackFile.devDirectory}/${data.name}.html`,
  htmlCont.replace('js/key.js', `js/${data.name}.js`).replace('<%= htmlWbpackPlugin.options.title %>', webpackComConf.titleFun(data.name, data.title)),
  'utf-8',
  err => {
    if (err) {
      return console.log(err);
    }
  })
})
