import React from 'react'
import Container from '../common/Container'
import Butten from '../common/Butten'
import Image from '../common/Image'
import Web from '/src/assets/Web.png'
import Content from '/src/assets/Content.png'
import Design from '/src/assets/Design.png'
import SEO  from '/src/assets/SEO.png'
import { GoArrowUpRight } from 'react-icons/go'
import GuyHawkins from '/src/assets/GuyHawkins.png'
import {FaStar } from 'react-icons/fa'

const Service = () => {
  return (
   <div className="bg-[#FFF] py-20 pt-50">
    <Container>
        <div className="flex items-center justify-between">    
        <h1 className='font-primary font-medium text-[36px] text-[#242B36] '>Browse Service by Categories</h1>
        <Butten btnText={'View all Services'}
        className={'bg-[#007456] hover:bg-[#007BFF]'}
        btnIcon={<GoArrowUpRight/>}
        />
         </div>
         <div className=" flex gap-x-[24px] mt-[40px] ">
            <Image src={Web}alt={Web}
            className={' bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'}/>
            <Image src={Content}alt={Content}
            className={' bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'}/>
            <Image src={Design}alt={Design}
            className={' bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'}/>
            <Image src={SEO }alt={SEO }
            className={' bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105'}/>
         </div>
         <div className="flex items-center justify-between pt-[120px]">
            <h3 className='text-[36px] tect-[#242B36] font-medium font-medium'>Top Rated Freelancers</h3>
            <Butten btnText={'Browse all '}
            btnIcon={<GoArrowUpRight/>}
            className={'bg-[#007456] hover:bg-[#007BFF] text-white'}/>
         </div>
         <div className="pt-[40px]"> 
         <div className="w-[450px] h-[500px] bg-gray-100  pt-[32px]  px-[32px]  bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105">
            <div className="flex items-center justify-between ">   
         <Image src={GuyHawkins} alt={GuyHawkins}/> 
         <h1 className='text-[20px] text-[#242B36] font-primary font-medium pb-12'>Guy Hawkins</h1>
         <h2 className='pb-12'>|</h2>
         <div className="self-star pb-8">      
         <Butten btnText={'Vetted Pro'}/>
         </div>
         </div>
         <div className="ml-[90px] mt-[-35px]">
            <div className="flex gap-2 "> 
            <FaStar/>  
         <h4 className='text-[14px] tect-[#242B36] font-normal font-primary'> 4.0 (212)</h4>
          </div>
        <h3 className='text-[#242B36] text-[16px] font-normal font-primary w-[255px] pt-1'>Graphic & UI UX Designer</h3>
         
        </div>
<div className="w-[424px] ">
  {/* First Line */}
  <div className="flex gap-3 pt-[24px]">
    <Butten className="whitespace-nowrap" btnText={"Figma"} />
    <Butten className="whitespace-nowrap" btnText={"Mobile App"} />
    <Butten className="whitespace-nowrap" btnText={"Branding"} />
    
  </div>

  {/* Second Line */}
  <div className="flex gap-3 pt-4">
   <Butten className="whitespace-nowrap" btnText={"Sales Copy"} />
    <Butten className="whitespace-nowrap" btnText={"UI Design"} />
   
  </div>
  <div className="flex pt-4 gap-x-5"> 
   <Butten className="whitespace-nowrap w-[150px] h-[40px]" btnText={"Web Design"} />
   <h3 className='text-[18px] text-[#242B36] font-medium font-primary pt-2'>+1</h3>
   </div>
</div>
<div className="flex justify-between items-start mb-6 pt-[24px]">
<div> 
<h3 className=' text-[16px] text-[#242B36] font-primary font-medium'>Location:</h3> 
<h4 className='pt-[4px] text-[#414E62] text-[16px] font-normal font-primary'>Nicosia, Cyprus</h4>
</div>
<div className="text-right mb-6">
   <h3 className='text-[16px] pr-14 text-[#242B36] font-primary font-medium'>Rate:</h3>
   <h4 className='pt-[4px]  text-[#414E62] text-[16px] font-normal font-primary'>$25-&30 / hr</h4>
</div>
 </div>
 
<Butten className={'w-[190px] h-[50px] -mt-[24px] text-[16px] text-[#007456] font-medium font-primary'} 
btnText={'View Profile'}
btnIcon={<GoArrowUpRight/>}/>


</div>
   
    </div> 
<div className="flex justify-center px-4">
  <div className="w-full max-w-[1320px] h-[447px] bg-[#E5E5E5] mt-[120px] flex flex-col items-center text-center pt-[100px]  bg-white shadow-2xl duration-300 hover:bg-transparent hover:scale-105 ">
    <h3 className="text-[#242B36] text-2xl md:text-4xl font-semibold pt-10">
      Get Started with Xilancer
    </h3>

    <p className="text-[#414E62] text-base max-w-[612px] mt-3 px-4">
      Connect with top freelancers or showcase your skills to clients
      worldwide. Start your journey today and turn ideas into successful
      projects.
    </p>

    <Butten
      className="w-[160px] h-[44px] bg-[#FA8C00] hover:bg-[#007456] text-white mt-8"
      btnText="Join Free"
      btnIcon={<GoArrowUpRight />}
    />
  </div>
</div>
<footer className="relative bg-[#050505] text-white overflow-hidden mt-[120px]">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="/footer-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-6 hover:text-[#FA8C00]">About</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  Become Seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  Find Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FA8C00]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 hover:text-[#FA8C00]">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className='hover:text-[#FA8C00]'>Design & Creative</li>
              <li className='hover:text-[#FA8C00]'>Programming</li>
              <li className='hover:text-[#FA8C00]'>Data</li>
              <li className='hover:text-[#FA8C00]'>Development & IT</li>
              <li className='hover:text-[#FA8C00]'>Writing & Translation</li>
              <li className='hover:text-[#FA8C00]'>Finance & Accounting</li>
              <li className='hover:text-[#FA8C00]'>Digital Marketing</li>
              <li className='hover:text-[#FA8C00]'>Business</li>
              <li className='hover:text-[#FA8C00]'>Photography</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 hover:text-[#FA8C00]">Support</h3>
            <ul className="space-y-3 text-sm text-gray-400 ">
              <li className='hover:text-[#FA8C00]'>Privacy Policy</li>
              <li className='hover:text-[#FA8C00]'>Terms & Condition</li>
              <li className='hover:text-[#FA8C00]'>Help & Support</li>
              <li className='hover:text-[#FA8C00]'>Contact Us</li>
              <li className='hover:text-[#FA8C00]'>Documentation</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-6 hover:text-[#FA8C00]">Subscribe</h3>

            <p className="text-sm text-gray-400 mb-5 leading-relaxed hover:text-[#FA8C00]">
              Receive Xioraer news, updates, exclusive discounts and early
              offers.
            </p>

            <div className="flex items-center bg-white rounded-md overflow-hidden ">
              <input
                type="email"
                placeholder="your email address"
                className="flex-1 px-4 py-3 text-sm text-gray-700 outline-none"/>
            </div>
          </div>
        </div>
        <div className="mt-20">  
          ___________________________________________________________________________________________________________________________________________________________________________________
          </div>
     
    </div>
     
    
    </footer>
    
    </Container>
    
   </div>
  )
}

export default Service