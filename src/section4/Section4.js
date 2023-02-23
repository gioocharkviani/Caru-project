import React from 'react'
import Title from './Title'
import Sec4Con from './Sec4Con'
import Sec4Bg from '../assets/Sec4Bg.png'

const Section4 = () => {
  return (
    <div className='w-full pl-[5%] pr-[5%] mt-[100px]  flex  flex-col pb-[300px] bg-Section4-bg bg-contain bg-no-repeat bg-right-top'>
      <Title />
      <Sec4Con />
    </div>
  )
}

export default Section4
