import React from 'react'
import Sec1L from './Sec1L'
import Sec1R from './Sec1R'



const SectionCont = () => {
  return (
    <div className='flex w-full items-center pl-[5%] pr-[5%] bg-Bg3 bg-right-bottom bg-no-repeat h-full mt-[30px]'>
      <Sec1L />
      <Sec1R />
    </div>
  )
}

export default SectionCont
