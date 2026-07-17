import React from "react";
import Container from "../common/Container";
import Image from "../common/Image";
import logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import Butten from "../common/Butten";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import { FaSignInAlt } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-[#E2FFF6]  py-[28px]">
      <Container>
        <div className="flex items-center justify-between w-full">
          <div>
            <Image src={logo} alt={logo} />
          </div>

          <ul className="flex items-center gap-x-[60px]">
            <li>
              <Link
                className="text-[#16px] font-primary font-normal text-[#242B36]  hover:text-[#FA8C00] duration-300 "
                to="/"
              >
                <div className="flex"> 
                Home <GoChevronDown 
                className=" mt-1"/>

</div>
              </Link>
            </li>
            <li>
              <Link
                className="text-[#16px] font-primary font-normal text-[#242B36]  hover:text-[#FA8C00]  duration-300 "
                to="jobs"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                className="text-[#16px] font-primary font-normal text-[#242B36]  hover:text-[#FA8C00] duration-300 "
                to="talents"
              >
                Talents
              </Link>
            </li>
            <li>
              <Link
                className="text-[#16px] font-primary font-normal text-[#242B36]  hover:text-[#FA8C00] duration-300  "
                to="subscriptions"
              >
                Subscriptions
              </Link>
            </li>
            <li>
              <Link
                className="text-[#16px] font-primary font-normal text-[#242B36]  hover:text-[#FA8C00] duration-300 "
                to="/pages"
              >
                <div className="flex"> 
                Pages <GoChevronDown
                 className="mt-1"/>

                </div>
              </Link>
            </li>
            <li>
              <Link
                className="text-[#16px] font- font-normal text-[#242B36]  hover:text-[#FA8C00] duration-300 "
                to="contact"
              >
                Contact
              </Link>
            </li>
            
            <li>
              <Link
                className="text-[#16px] font- font-normal text-[#242B36]  hover:text-[#FA8C00]  duration-300 "
                to="service"
              >
                Service
              </Link>
            </li>
          </ul>

          <div className="flex gap-x-3">

            <Butten
              className={"bg-[#007456] text-white hover:bg-[#FA8C00]"}
              btnText={ "Sign Up"}
              btnIcon={<FaSignInAlt className="text-3xl"/>}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
