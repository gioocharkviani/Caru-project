import React from 'react'
import phone from '../assets/phone.svg'
import messages from '../assets/messages.svg'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'

const FooterNav = () => {
  return (
    <div className='flex justify-center gap-[230px]'>
        
        <div  className='flex flex-col gap-[30px]'>
            <h2 className='font-FiraGO font-[700] text-[24px] text-[#000]'>კონტაქტი</h2>
            <ul className='flex gap-[28px]'>
                <li className='flex gap-[20px] items-center font-FiraGO text-[14px] font-[400]'><i><img src={phone} /></i>571712384</li>
                <li className='flex gap-[20px] items-center font-FiraGO text-[14px] font-[400]'><i><img src={messages} /></i>m.ks/knd.geofficial</li>
                <li className='flex gap-[20px] items-center font-FiraGO text-[14px] font-[400]'><i><img src={messages} /></i>info@ragac.ge</li>
            </ul>
        </div>

        <div  className='flex flex-col gap-[30px]'>
            <h2 className='font-FiraGO font-[700] text-[24px] text-[#000]'>სამუშაო საათები</h2>
            <div className='font-FiraGO font-[400] text-[14px] text-[#000]'>ყოველდღე 09:00 - 21:00</div>
        </div>

        <div  className='flex flex-col gap-[30px]'>
            <h2 className='font-FiraGO font-[700] text-[24px] text-[#000]'>გამოგვყევით</h2>
            <div className='flex gap-[21px]'>
                <div><a href='#'><img src={fb} /></a></div>
                <div><a href='#'><img src={insta} /></a></div>
            </div>
        </div>


    </div>
  )
}

export default FooterNav
