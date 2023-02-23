import React from 'react'
import Title from './Title'
import SlideWrapper from './Slider/SlideWrapper'

const Section2 = () => {
  return (
    <div className=' w-full pl-[5%] pr-[5%] mt-[300px]  flex  bg-Section2-bg bg-contain flex-col h-[100vh] bg-left-top bg-no-repeat'>
     <Title />
     <SlideWrapper />
    </div>
  )
}

export default Section2
