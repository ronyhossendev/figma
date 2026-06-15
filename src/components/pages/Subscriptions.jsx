import React from 'react'
import Container from '../common/Container'
import CardThree from '../common/CardThree'

const Subscriptions = () => {
  return (
      
   <div className="bg-[#FFFFFF] py-8">
   <Container>
    
    <h1 className='w-[1320px] font-primary font-medium text-[36px] text-[#242B36]'>Latest Job</h1>
      <div className="flex gap-x-[24px]"> 
    <CardThree
    a={"Logo Design for Business Loan Brokerage"}
    b={"Jun 5, 2025"}
    c={"MidLevel"}
    d={"$260"}
    e={"Posted 3 hours ago"}
    f={"We are seeking a talent graphic designer to create a professional logo for Our...."}
    g={"View More"}
    />
    <CardThree
    a={"Logo Design for Business Loan Brokerage"}
    b={"Jun 5, 2025"}
    c={"MidLevel"}
    d={"$260"}
    e={"Posted 3 hours ago"}
    f={"We are seeking a talent graphic designer to create a professional logo for Our...."}
    g={"View More"}
    />
    <CardThree
    a={"Logo Design for Business Loan Brokerage"}
    b={"Jun 5, 2025"}
    c={"MidLevel"}
    d={"$260"}
    e={"Posted 3 hours ago"}
    f={"We are seeking a talent graphic designer to create a professional logo for Our...."}
    g={"View More"}
    />
    </div>
   </Container>
   </div>
   
  )
}

export default Subscriptions