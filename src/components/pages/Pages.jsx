import React from "react";
import Container from "../common/Container";
import Image from "../common/Image";

import Vector from "/src/assets/Vector.png";
import Component from "/src/assets/Component.png";
import Group from "/src/assets/Group.png";
import LafTop from "/src/assets/LafTop.png";

const Pages = () => {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="bg-[#F2F8F7] rounded-3xl px-16 py-14 flex items-center justify-between gap-16">
          
          {/* Left Content */}
          <div className="w-1/2">
            <h1 className="font-primary font-medium text-[36px] leading-[46px] text-[#242B36] mb-10">
              All You Need to Hire The Best
            </h1>

            {/* Item 1 */}
            <div className="flex items-start gap-4 mb-8">
              <Image src={Vector} alt="Verified Professionals" />
              <div>
                <h3 className="font-primary font-semibold text-[20px] text-[#242B36]">
                  Verified Professionals
                </h3>
                <p className="font-primary text-[16px] leading-7 text-[#5A6473] mt-2">
                  Work with skilled freelancers who pass quality checks and
                  portfolio reviews.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 mb-8">
              <Image src={Component} alt="Pay Only for Results" />
              <div>
                <h3 className="font-primary font-semibold text-[20px] text-[#242B36]">
                  Pay Only for Results
                </h3>
                <p className="font-primary text-[16px] leading-7 text-[#5A6473] mt-2">
                  Release payment once your project is successfully completed.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4">
              <Image src={Group} alt="Secure & Transparent" />
              <div>
                <h3 className="font-primary font-semibold text-[20px] text-[#242B36]">
                  Secure & Transparent
                </h3>
                <p className="font-primary text-[16px] leading-7 text-[#5A6473] mt-2">
                  Built-in tools for communication, file sharing, and safe
                  payments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/2 flex justify-end">
            <Image
              src={LafTop}
              alt="Laptop"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Pages;