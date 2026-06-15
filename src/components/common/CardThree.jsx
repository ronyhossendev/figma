import React from 'react'
import { GoDotFill } from 'react-icons/go'
import Butten from './Butten'
import { FaArrowRight } from 'react-icons/fa'

const CardThree = ({cardImg,a,b,c,d,e,f,g,}) => {
  return (
    <div className=' bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'>  
    <div className="p-[32px] bg-[#FFFFFF] shadow-2xl">   
    <img src={cardImg} alt={cardImg}/>
    <h3 className='w-[367px] font-primary font-medium text-[20px] text-[#242B36]'>{a}</h3>
    <div className="flex gap-x-[10px] pt-[10px]">  
    <h4 className='w-[90px] font-primary font-normal text-[16px] text-[#414E62]'>{b}</h4>
    <GoDotFill className='mt-1'/>
    <h5 className='w-[70px] font-primary font-medium text-[16px] text-[242B36]'>{c}</h5>
    </div>
    <div className="flex pt-[18px] gap-x-[12px]">
        <h3 className='w-[51px] font-primary font-medium text-[20px] text-[20px]'>{d}</h3>
        <Butten btnText={"Fixed"} className={"rounded-full -mt-3 hover:text-[#FA8C00]"}/>
        <h5 className='w-[154px] font-primary font-normal text-[16px] text-[#414E62]'>{e}</h5>
    </div>
    <p className='w-[376px] font-primary font-primary text-[16px] text-[#3B4759] pt-[16px]'>{f}</p>
    <div className="flex gap-x-[8px] pt-[16px]">
        <Butten btnText={"Card Design"} className={'rounded-full w-[179px] h-[50px] text-sm font-normal font-primary text-[14px] text-[#414E62] hover:text-[#FA8C00]'}/>
        <Butten btnText={"Graphic Design"} className={'rounded-full hover:text-[#FA8C00]'}/>
        </div>
        <div className="flex gap-x-[8px] pt-[16px]">
            <Butten btnText={'Graphic Design'} className={'rounded-full hover:text-[#FA8C00]'}/>
            <Butten btnText={'Adobe Illustrator'} className={'rounded-full hover:text-[#FA8C00]'}/>
            </div>
            <div className="flex pt-[22px] gap-x-4">
            <h2 className='w-[73px] font-primary font-medium text-[14px] text-[#007456] '>{g}</h2>
            <FaArrowRight className='pt-[6px] text-[#007456]'/>
             </div>


    
    </div>
     </div>
  )
}

export default CardThree