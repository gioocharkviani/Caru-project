import React, { useState } from 'react'
import SlideImg from '../../assets/Img1.png'
import CaruselCom from './CaruselCom';
import Slideimages from './Slideimages';

const Slide = () => {

  const [curentSlide, setCurrentSlide] = useState('000');


  return (

      


    <div className='flex justify-center gap-[214px]'>
      
      <div className='flex flex-col'>
      <CaruselCom id='0' title='უკვეთავ' description='საიტის მეშვეობით ავსებ განაცხადს'  />
      <CaruselCom id='1' title='მიყავს' description='ავტოასისტენტი მოდის შენთა და მიყავს მანქანა ხელოსანთან<'  />
      <CaruselCom id='2' title='ამოწმებ' description='უკეთებს დიაგნოსტიკას და ადგენს რა პრობლემა აქვს, თან გაყენებს საქმის კურსში'  />
      <CaruselCom id='3' title='გითანხმებს' description='არკვევს თუ რა დაჯდება ნაწილები + ხელობა და გითანხმებს ხარჯთაღრიცხვას'  />
      <CaruselCom id='4' title='აკეთებს' description='ურიცხავ ფულს ავტოასისტენტს ის კი აკეთებს ავტომობილს'  />
      <CaruselCom id='5' title='გიბრუნებს' description='გიბრუნებს შეკეთებულ ავტომობილს'  />
      </div>

      <div className='flex justify-center flex-col'>
        <Slideimages index='0' image={SlideImg}/>
        <Slideimages index='1' visible='hidden' image={SlideImg}/>
        <Slideimages index='2' visible='hidden' image={SlideImg}/>
        <Slideimages index='3' visible='hidden' image={SlideImg}/>
        <Slideimages index='4' visible='hidden' image={SlideImg}/>
        <Slideimages index='5' visible='hidden' image={SlideImg}/>
      </div>

    </div>
  )
}



export default Slide
