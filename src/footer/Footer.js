import React from 'react'
import FooterNav from './FooterNav'

const Footer = () => {
  return (
    <div className='W-full bg-[#fff] pl-[5%] pr-[5%] pt-[55px] pb-[55px]'>
      <FooterNav />
      <div className='flex justify-center w-full mt-[24px] font-FiraGO font-[400] text-[14px]'><span>all right reserved © copy right</span></div>
    </div>
  )
}

export default Footer
