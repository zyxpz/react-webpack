import React, { Component } from 'react';

import '../../public/css/index.less';

// 公用组件
import Header from '../common/header';
import Footer from '../common/footer';

export default class Init extends Component {
  render() {
    return (
      <div className="cont">
          <Header />
          <div className='index'>
              主页
          </div>
          <Footer 
            text={'最下边'}
          />
      </div>
    )
  }
}