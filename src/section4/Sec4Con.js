import React from 'react'
import Cars from '../assets/Cars.png'
import Sec4Cards from './Sec4Cards'

const Sec4Con = () => {
  return (
    <div className='w-full flex justify-center mt-[76px]  pl-[5%] pr-[5%]'>

      <div className='flex-col flex'>
        <Sec4Cards />
        <div className='mt-[30px] font-FiraGO text-[18px] italic text-[#797A80]'>და ყველაფერი რაც შენს მანქანას ჭირდება</div>
        <div className='mt-[90px]'><button className=' font-FiraGO text-[24px]  bg-[#16110D] text-[white] pt-[25px] pb-[25px] pl-[50px] pr-[50px] rounded-[5px] '>ავტოასისტენტის გამოძახება</button></div>
      </div>

      <div><img src={Cars} /></div>

    </div>
  )
}

export default Sec4Con
