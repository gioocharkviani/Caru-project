import React from 'react'
import Sec4Cars from '../assets/Sec4Cars.svg'
import Electricic from '../assets/Electricic.svg'
import SettingIC from '../assets/SettingIC.svg'

const Sec4Cards = () => {
  return (
    <div className='flex w-full gap-[20px]'>

        <div className='w-[285px] h-[377px] flex flex-col rounded-[10px] justify-center items-center pl-[30px] pr-[30px] gap-[85px] card'>
            <div><img src={Sec4Cars}/></div>
            <div className='text-[#FCFCFC] font-[700] text-center font-FiraGO text-[32px]'>კოსმეტიკა</div>
        </div>

        <div className='w-[285px] h-[377px] flex flex-col rounded-[10px] justify-center items-center  pl-[30px] pr-[30px] gap-[85px] card'>
            <div><img src={SettingIC}/></div>
            <div className='text-[#FCFCFC] font-[700] text-center font-FiraGO text-[32px]'>სავალი ნაწილები</div>
        </div>

        <div className='w-[285px] h-[377px] flex flex-col rounded-[10px] justify-center items-center  pl-[30px] pr-[30px] gap-[85px] card'>
            <div><img src={Electricic}/></div>
            <div className='text-[#FCFCFC] font-[700] text-center font-FiraGO text-[32px]'>ელექტროობა</div>
        </div>


      
    </div>
  )
}

export default Sec4Cards
