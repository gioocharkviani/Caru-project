import React from 'react'

const Sec1L = () => {
  return (
    <div className='flex flex-col w-[60%] gap-[10px]'>
      <div className='text-[#16110D] text-[64px] font-[700] font-FiraGO leading-[77px]'>ამ ნაწილში გამოვიტანოთ სათაური/შინაარსი...</div>
      <div className='text-[#010101] text-[24px]  font-FiraGO leading-[29px] italic'>აქ უკვე თუ გვექნება პატარა ტექსტი მეტი აღწერისთვის. თუ ორ ხაზიანი იყო, გამოვაჩინოთ </div>
      <div className='flex gap-[20px] mt-[130px]'>
        <button className=' font-FiraGO text-[24px]  bg-[#16110D] text-[white] pt-[25px] pb-[25px] pl-[50px] pr-[50px] rounded-[5px]'>ავტოასისტენტის გამოძახება</button>
        <button className=' font-FiraGO  text-[24px] bg-[#F3F3F4] text-[#010101] pt-[25px] pb-[25px] pl-[50px] pr-[50px] rounded-[5px]'>ერთი ღილაკი</button>
      </div>
    </div>
  )
}

export default Sec1L
