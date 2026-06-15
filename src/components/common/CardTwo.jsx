import React from 'react'

export const CardTwo = ({cardImg,me,hi,hello,la,le,ll,na,nineIcon,hoo,lo,lx,el,pp,nn}) => {
  return (
    <div className='p-[16px]  bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'>
          <img src={cardImg} alt="cardImg" />
        <h3 className='w-[392px] font-normal text-[16px] text-[#414E62] pt-[12px]'>{me}</h3>
        <h3 className='w-[392px] font-primary font-medium text-[20px] text-[#242B36] pt-[12px]'>{hi}</h3>
        <h3 >{hello}</h3>
        <h5 className='font-primary font-normal text-[14px] text-[414E62] pt-[12px]'>{la}</h5>
        <h6 className='pt-[12px]'>{na}</h6>
        <div className="flex gap-x-40"> 
          
        <h4 className='w-[101px] font-primary font-medium text-[16px] text-[#242B36 pt-[30px]'>{le}</h4>
        <h4 className='w-[101px] font-primary font-normal text-[13px] text-[#414E62] pt-[30px]'>{ll}</h4>
        </div>
    </div>
  )
}

