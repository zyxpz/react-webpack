import React from 'react';
import '../../public/css/footer.less'

const Footer = props => (
  <div className='footer'>
    {
      props.text || '底部'
    }
  </div>
)

export default Footer;