import React from 'react'
import UserIcon from '../assets/user-btn.svg'

const UserBtn = () => {
  return (
    <div className='flex items-center'>
      <button>
        <img src={UserIcon} />
      </button>
    </div>
  )
}

export default UserBtn
