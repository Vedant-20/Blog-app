import React from 'react'
import logo from '../assets/logo.png'

const Logo = ({width= '100 px'}) => {
  return (
    <img className='w-20 h-20' src={logo} alt="logo" />
  )
}

export default Logo