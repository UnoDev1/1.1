import React from "react";
import { Carousel } from "flowbite-react";

import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import banner3 from "../assets/banner3.png"


const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Tansforming Businesses <span className="text-brandPrimary leading-snug">using AI</span></h1>
            <p className="text-neutralGrey text-base mb-8">Unlock the power of AI and digital transformation with Uno.AI Solutions. We provide expert consulting, innovative technology solutions, and staffing services to help businesses thrive in the digital age.</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner2} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Harness AI to <span className="text-brandPrimary leading-snug">fuel your business</span></h1>
            <p className="text-neutralGrey text-base mb-8">Elevate your business with cutting-edge AI technology designed to scale with your ambitions.</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
           </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner3} alt=""/>
           </div>
            {/* hero text */}
           <div className="md:w-1/2">
            <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">Grow Business Fast <span className="text-brandPrimary leading-snug">with uno.ai</span></h1>
            <p className="text-neutralGrey text-base mb-8">Empower your business with AI-driven insights for sustainable growth and innovation.</p>
            <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">Register</button>
           </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
