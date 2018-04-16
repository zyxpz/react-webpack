import React from 'react';

// 公用组件
import Header from '../common/header';
import Footer from '../common/footer';

const Index = props => 

<div className="cont">
    <Header/>
    <div className="index">
      {
        props.text || demo
      }
    </div>
    <Footer/>
</div>

export default Index;