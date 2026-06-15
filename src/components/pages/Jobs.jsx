import React from 'react'
import Container from '../common/Container'
import Butten from '../common/Butten'
import { TiAdjustBrightness } from 'react-icons/ti'
import Card from '../common/card'
import oneIcon from "/src/assets/icon.png"
import twoIcon from "/src/assets/Frame.png"
import three from "/src/assets/Lock.png"
import four from "/src/assets/video.png"
import { HiArrowUpRight } from 'react-icons/hi2'




const Jobs = () => {
  return (
    <div className="bg-[#FFFFFF] py-20">
    <Container>
      <div className="">
        <div className="flex justify-between">    
        <h1 className='w-[350px] font-primary font-medium text-[36px] text-[#242B36]'>Popular Categories</h1>
        <Butten className={'bg-[#007456] text-white hover:bg-[#007BFF]'} 
        btnText={'Browse all categories'}
        btnIcon={<HiArrowUpRight />}/>
        
        </div>
      
      </div>
      <div className="flex justify-between gap-x-5 pt-10">
        <Card
      cardImg={oneIcon}
      title = {'Website Development'}
      des={'Customer experience and account management jobs.'}
      come={'6 Jobs'}
      />
        <Card
      cardImg={twoIcon}
      title={'Website Development'}
      des={'Customer experience and account management jobs.'}
      come={'18 Jobs'}
      />
        <Card
      cardImg={three}
      title={'Website Development'}
      des={'Customer experience and account management jobs.'}
      come={'22 Jobs'}
      />
        <Card
      cardImg={four}
      title={'Website Development'}
      des={'Customer experience and account management jobs.'}
      come={'8 Jobs'}
      />
      </div>
    </Container>
    </div>
  )
}

export default Jobs