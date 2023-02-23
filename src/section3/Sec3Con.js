import React from 'react'
import Alarm from '../assets/alarm-clock.svg'
import Shield from '../assets/shield-check.svg'
import coins from '../assets/coins.svg'

const Sec3Con = () => {
  return (
    <div className='w-full flex justify-center mt-[76px] gap-[90px]'>
        
        <div className='flex items-center gap-[30px]'>
            <div><img src={Alarm}/></div>
            <div className='flex flex-col gap-[10px] w-full '>
                <h2 className='text-[32px] text-[#16110D] font-[700] font-FiraGO'>დროის ეკონომია</h2>
                <span className='text-[18px] text-[#797A80] font-[350] italic font-FiraGO'>
                შენით თუ წახვალ მანქანის გასაკეთებლად საშუალოდ დაგჭირდება 8 საათი,
                ქარუთი კი სულ 5 წუთი დგეხარჯება, ეს არის დრო მანქანის გადასაცემად და დასაბრუნებლად
                </span>
            </div>
        </div>

        <div className='flex items-center gap-[30px]'>
            <div><img src={Shield} className='w-[114px] h-[114px] ' /></div>
            <div className='flex flex-col gap-[10px] w-full'>
                <h2 className='text-[32px] text-[#16110D] font-[700] font-FiraGO'>გარანტია</h2>
                <span className='text-[18px] text-[#797A80] font-[350] italic font-FiraGO'>
                ავტო ასისტენტს განთავსებული აქვს ჩვენთან საგარანტიო თანხა, რომელსაც 
                საწიროების შემთხვევაში გამოვიყენებთ და აგინაზღაურებთ თუ რაიმე კარგად არ გაკეთდა
                </span>
            </div>
        </div>

        <div className='flex items-center gap-[30px]'>
            <div><img src={coins} className='w-[114px] h-[114px]' /></div>
            <div className='flex flex-col gap-[10px] w-full'>
                <h2 className='text-[32px] text-[#16110D] font-[700] font-FiraGO'>დაზღვევა</h2>
                <span className='text-[18px] text-[#797A80] font-[350] italic font-FiraGO'>
                თუ შენ მანქანას ავტოასისტენტის ხელში რაიმე მოუვა, ამას დაზღვევა
                 აანაზღაურებს (პოლისი შეგიძლია ნახო წესებში და პირობებში)
                </span>
            </div>
        </div>


    </div>
  )
}

export default Sec3Con
