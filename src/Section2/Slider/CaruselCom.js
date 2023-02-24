import React from 'react'
import Slideimages from './Slideimages';


const CaruselCom = (props) => {

    function func(){
        console.log(props.id , props.title);
    }
    
    
  return (
    <div onMouseOver={func} className='cursor-pointer flex gap-[10px] flex-col pl-[70px] pb-[18px] pt-[18px] border-l-[1px] border-[#16110D] hover:border-l-[5px] hover:ml-[-2px] hover:border-[#6E61EC]'>
        <h2 className='font-FiraGO text-[32px] font-[700]'>{props.title}</h2>
        <span className='font-FiraGO text-[20px] text-[#797A80] italic'>{props.description}</span>
    </div>
  )
}

export default CaruselCom
