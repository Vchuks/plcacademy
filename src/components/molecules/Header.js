import React from 'react'
import Logo from '../atom/Logo'
import plcLogo from '../../images/plclogo.png'
import Navbar from '../atom/Navbar'

const Header = () => {
  return (
    <div className='pad pdhead w-100 d-flex stk ind mb-5 upbg justify-content-between align-items-center'>
      <div className='logosize'>
        <Logo src={plcLogo} alt="Pluralcode"/>
      </div>
      <Navbar/>
    </div>
  )
}

export default Header
