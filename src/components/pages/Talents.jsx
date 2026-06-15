import React from 'react'
import Container from '../common/Container'
import Butten from '../common/Butten'
import { CardTwo } from '../common/CardTwo'
import nineIcon from '/src/assets/Rectangle.png'
import hoo from '/src/assets/Cheers.png'
import nn from '/src/assets/Rectangle.png'
import lo from '/src/assets/Business.png'
import lx from '/src/assets/TempLate.png'
import el from '/src/assets/Gardener.png'
import pp from '/src/assets/Dream.png'



const Talents = () => {
  return (
   <div className="bg-[#FFFFFF] py-30">
    <Container>  
      <div className="flex justify-between pb-[120px]">
      <h3 className='w-[350px] font-primary font-medium text-[36px] text-[#242B36]'>Popular Services</h3> 
      <div className="flex gap-x-4">  
      <Butten btnText={'Design & Creative'}
      className={'bg-[#007456] text-white hover:bg-[#007BFF]'}/>
      <Butten btnText={'Dev & IT text-white'}
      className={'bg-[#007456] text-white hover:bg-[#007BFF]'}/>
      <Butten btnText={'Digital Marketing'}
      className={'bg-[#007456] text-white hover:bg-[#007BFF]'}/>
     </div> 
      </div>
      <div className="flex gap-x-6">     
      <div className="pt-[40px]">  
      <CardTwo 
      cardImg={nn}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
       </div>
       <div className="pt-[40px]">  
      <CardTwo 
      cardImg={hoo}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
       </div>
       <div className="pt-[40px]">  
      <CardTwo 
      cardImg={lo}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
       </div>
       </div>
         <div className="flex gap-x-6">     
      <div className="pt-[40px]">  
      <CardTwo 
      cardImg={lx}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
       </div>
       <div className="pt-[40px]">  
      <CardTwo 
      cardImg={el}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
       </div>
       <div className="pt-[40px]">  
      <CardTwo 
      cardImg={pp}
      me={'Design & Creative'}
      hi={'I will do professional figma design for website  UI UX and mobile app desi....'}
      la={'4.0 (3 Reviews)'}
      na={'__________________________________________________________'}
      le={'Robert Bross'}
      ll={'Starting at: $29'}
      />
      
      
     
       </div>
       </div>
    </Container>
   </div>
  )
}

export default Talents