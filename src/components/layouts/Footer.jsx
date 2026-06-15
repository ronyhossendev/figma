import React from 'react'
import Image from '../common/Image'
import { RiFacebookFill } from 'react-icons/ri'
import { CiGlobe } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import logo from '/src/assets/logo.png'
import Container from '../common/Container'
import Flex from '../common/Flex'
const Footer = () => {
  return (
    <div className='flex mt-10 bg-[#050505] py-4'>
      <Container> 
        <Flex className={"justify-between"}>        
           <Image src={logo}alt={'logo'}/>
           <p className=' w-[272px] h-[16px] text-white'>© 2025 All right reserved by xgenious</p>
           <div className="flex gap-4 "> 
           <RiFacebookFill 
           className=' bg-[#FA8C00]'/>
           <CiGlobe className=' bg-[#FA8C00]'/>
           <FaXTwitter className=' bg-[#FA8C00]'/>
           <FaLinkedinIn className=' bg-[#FA8C00]' />
          
     </div>
     </Flex>  
    </Container>
         </div>
  )
}

export default Footer