import React from 'react'
import Image from './Image'

const card = ({cardImg,title,des,oneIcon,twoIcon,three,four,come,className }) => {
  return (
    <>
    <div className=" bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105">  
    <div className='p-[24px] bg-white shadow-2xl'>
        <img src={cardImg} alt="cardImg" />
        <h3 className={`${className}`} >{title}</h3>
        <p>{des}</p>
        <h3>{come}</h3>
        
    </div>
     </div>
    </>
  )
}

export default card