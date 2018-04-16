import React from 'react';
import '../../public/css/header.less';

const Header = props => 
  <div className='header'>
    <h1>{
      props.text || '头部'
    }</h1>
    <nav>
      <a href="/index.html">主站</a>
    </nav>
  </div>


export default Header;