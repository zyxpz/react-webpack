const fs = require('fs');
const path = require('path');
const entry = require('./entry');

/**
 * 节点的深度删除模块
 */
const rimraf = require('rimraf');

/**
 * 定义entryBuild
 */
const entryBuildPath = path.resolve(__dirname, '../../entryBuild');

/**
 * 删除entryBuild
 */
rimraf.sync(entryBuildPath);

/**
 * 创建entryBuild
 */
fs.mkdirSync(entryBuildPath);

const entyrContent = data => `
  import React from 'react'
  import { render } from 'react-dom'
  import Index from '../app/component/${data.path}'
  import Header from '../app/component/common/Header';
  import Footer from '../app/component/common/Footer';
  render(<Index key="Index"/>,document.getElementById('app'))
`

entry.map(data => {
  fs.writeFile(`${entryBuildPath}/${data.name}.js`, entyrContent(data), 'utf8', err => {
    if (err) {
      return console.log(err);
    }
  })
})
