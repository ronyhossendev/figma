import React from 'react'
import Container from '../common/Container'
import Image from '../common/Image'
import Vector from '/src/assets/Vector.png'
import componcent from '/src/assets/Component.png'
import Group from '/src/assets/Group.png'
import LafTop from '/src/assets/LafTop.png'


const Pages = () => {
  return (
    <div className="bg-[#FFFFFF] py-20">
     <Container>
         
      <div className="w-[800px] h-[600px] bg-[#F2F8F7]">
        
          <h1 className='w-[514px] font-primary font-medium text-[36px] text-[#242B36] pt-[64px]'>All You Need to Hire The Best</h1>
          <div className="flex gap-x-[12px] pt-[40px]"> 
           <Image src={Vector} alt={Vector}/>
           <h3 className='w-[465px] font-primary font-medium text-[18px] text-[#242B36]'>Verified Professionals</h3>
           </div>
            <p className='w-[600px] font-primary font-medium text-[16px] text-[#242B36] pt-[4px] px-[44px]'> Work with skilled freelancers who pass quality checks and portfolio reviews.</p>
          <div className="flex gap-x-[12px] pt-[40px]"> 
           <Image src={componcent} alt={componcent}/>
           <h3 className='w-[465px] font-primary font-medium text-[18px] text-[#242B36]'>Pay Only for Results</h3>
           </div>
            <p className='w-[550px] font-primary font-medium text-[16px] text-[#242B36] pt-[4px] px-[44px]'>Release payment once your project in successfully completed.</p>
          <div className="flex gap-x-[12px] pt-[40px]"> 
           <Image src={Group} alt={Group}/>
           <h3 className='w-[465px] font-primary font-medium text-[18px] text-[#242B36]'>Secure & Transparent</h3>
           </div>
            <p className='w-[600px] font-primary font-medium text-[16px] text-[#242B36] pt-[4px] px-[44px]'>Built-in tools for communication, file sharing, and sage payments.</p>
            
            <Image src={LafTop} alt={LafTop}/>
             
     
      </div>
   
     </Container>
    </div>
  )
}

export default Pages