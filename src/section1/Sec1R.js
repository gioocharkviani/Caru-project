import React from 'react'
import Iphone12 from '../assets/iphone12.png'
import Car from '../assets/Bmw.png'

const Sec1R = () => {
  return (
    <div className='w-[40%] top-[200px] relative flex flex-end'>
      <img src={Iphone12} />
      <img className='absolute top-[60%] ml-[-170px]' src={Car} />
    </div>
  )
}

export default Sec1R
