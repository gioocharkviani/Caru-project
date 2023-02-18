import React from 'react' 
import Header from '../header/Header'
import SectionCont from './SectionCont'

const Section1 = () => {
  return (
    <div className=' w-full  flex items-center bg-Sectop1-bg bg-cover flex-col h-[100vh] bg-right-top bg-no-repeat'>
      <Header />
      <SectionCont />
    </div>
  )
}

export default Section1
