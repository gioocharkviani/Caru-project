import React from 'react'
import SlideImg from '../../assets/Img1.png'

const Slide = () => {




  return (
  

    <div className='flex justify-center gap-[214px]'>
      
      <div className='flex flex-col'>

        <div  id='0' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
            <h2 className='font-FiraGO text-[32px] font-[700]'>უკვეთავ</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>საიტის მეშვეობით ავსებ განაცხადს</span>
        </div>

        <div id='1' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'> 
            <h2 className='font-FiraGO text-[32px] font-[700]'>მიყავს</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>ავტოასისტენტი მოდის შენთა და მიყავს მანქანა ხელოსანთან</span>
        </div>

        <div id='2' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
            <h2 className='font-FiraGO text-[32px] font-[700]'>ამოწმებ</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>უკეთებს დიაგნოსტიკას და ადგენს რა პრობლემა აქვს, თან გაყენებს საქმის კურსში</span>
        </div>

        <div id='3' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
            <h2 className='font-FiraGO text-[32px] font-[700]'>გითანხმებს</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>არკვევს თუ რა დაჯდება ნაწილები + ხელობა და გითანხმებს ხარჯთაღრიცხვას</span>
        </div>

        <div id='4' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
            <h2 className='font-FiraGO text-[32px] font-[700]'>აკეთებს</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>ურიცხავ ფულს ავტოასისტენტს ის კი აკეთებს ავტომობილს</span>
        </div>

        <div id='5' className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
            <h2 className='font-FiraGO text-[32px] font-[700]'>გიბრუნებს</h2>
            <span className='font-FiraGO text-[20px] text-[#797A80] italic'>გიბრუნებს შეკეთებულ ავტომობილს</span>
        </div>


      </div>

      <div className='flex justify-center flex-col'>
        <div id='0' className=''><img src={SlideImg} /></div>
        <div id='1' className='hidden'><img src={SlideImg} /></div>
        <div id='2' className='hidden'><img src={SlideImg} /></div>
        <div id='3' className='hidden'><img src={SlideImg} /></div>
        <div id='4' className='hidden'><img src={SlideImg} /></div>
        <div id='5' className='hidden'><img src={SlideImg} /></div>
      </div>

    </div>
  )
}



export default Slide
