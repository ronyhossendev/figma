import React from "react";
import Container from "../common/Container";
import Butten from "../common/Butten";
import Image from "../common/Image";
import image from "/src/assets/image.png";
import frames from "/src/assets/Frames.png";
import framess from "/src/assets/Framess.png";

import Flex from "../common/Flex";
import { HiArrowRight } from "react-icons/hi";
import { IoSearchCircleSharp, IoSearchSharp } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#E2FFF6] py-5">
      <Container>
        <div className="flex">
          <div className="">
            <h1 className="w-[686px] font-primary font-extralight text-[64px] text-[#242B36]">
              Connecting Ideas with the Right Talent
            </h1>
            <p className="w-[642px] font-primary font-[#16px] text-[#3B4759]">
              We make it’s easier for talents and businesses to connect and we
              make it absolutely less charges. Hire Talents or Get Hired from
              our platform and work independently
            </p>
            <div className="">
              <div className="pt-[32px] gap-x-4 flex font-primary font-normal">
                <Butten btnText={"Find work"} 
                className={'bg-[#007456] text-white hover:bg-[#007BFF]'}/>

                <Butten btnText={"Find talent"} 
                className={'bg-[#007456] text-white hover:bg-[#007BFF]'}/>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by role, service, skill or keywords"
                  className="p-4 border border-gray-800 mt-4 w-full text-black text-base rounded-md focus:outline-none focus:border-gray-800 "
                />
                <IoSearchCircleSharp className="absolute top-[60%] right-5 translate-y-[-50%] text-3xl bg-[#FA8C00] text-white w-[48px] h-[48px]" />
              </div>

              <div className="pt-[32px] gap-x-4 flex font-primary font-normal text-[#3B4759]">
                <Butten
                  btnText={"Design & Creative"}
                  btnIcon={<HiArrowRight />}
                  className={'w-[290px] h-[50px] hover:text-[#FA8C00]'}
                />
                <Butten
                  btnText={"website Development"}
                  btnIcon={<HiArrowRight />}
                  className={'w-[300px] h-[50px] hover:text-[#FA8C00]'}
                />
                <Butten btnText={"SEO"} btnIcon={<HiArrowRight />}
                className={'hover:text-[#FA8C00]'} />
              </div>
              <div className="pt-[16px] gap-x-4 flex font-primary font-normal">
                <Butten
                  btnText={"Digital Marketing"}
                  btnIcon={<HiArrowRight />}
                className={'hover:text-[#FA8C00]'}/>
                <Butten btnText={"App Developer"} btnIcon={<HiArrowRight />} 
                className={'hover:text-[#FA8C00]'}/>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={image} alt={image} className={'relative'}/>
            <Image src={frames} alt={frames} className={'absolute top-[40%]  transform-y-[-90%]'}/>
            <Image src={framess} alt={framess} className={'absolute top-[60%] right-3 translate-y-[-50%]'}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
