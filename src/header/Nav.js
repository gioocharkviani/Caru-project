import React from 'react'
import NavMenu from './NavMenu'
import Lang from './Lang'
import UserBtn from './UserBtn'

const Nav = () => {
  return (
    <div className='flex gap-[50px]' >
        <NavMenu />
        <Lang />
        <UserBtn />
    </div>
  )
}

export default Nav
