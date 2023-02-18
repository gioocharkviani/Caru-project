import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='w-full flex  justify-between font-[400] mt-[30px]'> 
      <Logo />
      <Nav />
    </div>
  )
}

export default Header
