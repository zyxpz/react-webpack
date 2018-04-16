import React, { Component } from 'react';

import '../../public/css/index.less';

export default class Init extends Component {
  render() {
    return (
      <div className="cont">
          <div className="top">
              这是头部
          </div>
          <div className="bottom">
              这是底部
          </div>
          <a href="https://www.baidu.com" target="_blank">dianji</a>
      </div>
    )
  }
}