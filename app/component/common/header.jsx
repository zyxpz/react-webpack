import React from 'react';
import '../../public/css/header.less';

const Header = props => 
  <div className='header'>
    <h1>{
      props.text || '头部'
    }</h1>
    <nav>
      <a href="/index.html">主站</a>
      <a href="/index2.html">副页</a>
      <a href="/demo.html">demo</a>
    </nav>
  </div>


export default Header;