import React from 'react'
import Logo from '../atom/Logo'
import micro from '../../images/micro.png';
import google from '../../images/google.png';
import cocacola from '../../images/cocacola.png';
import skype from '../../images/skype.png';

const Talent = () => {
  return (
    <div className='talent pad'>
      <h3 className='pseccolor text-center pt-lg-5'>Where Our Talents Work</h3>
      <div className='d-flex flex-wrap flex-lg-nowrap justify-content-center gap-2 gap-lg-5 p-4 pb-5'>
        <div><Logo src={micro}/></div>
        <div><Logo src={google}/></div>
        <div><Logo src={cocacola}/></div>
        <div><Logo src={skype}/></div>
      </div>
    </div>
  )
}

export default Talent
