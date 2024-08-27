import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/special-operations-soldier-allocating-resources-based-mission-needs.jpg";
import banner2 from "../assets/OQK0MV0.jpg";
import banner3 from "../assets/face-recognition-personal-identification-collage.jpg";
import ContactUs from "./ContactUs"; // Adjust the path as necessary

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  const carouselItems = [
    {
      img: banner2,
      title: "Empower Your Business with AI",
      text: "Unlock AI and digital transformation with Uno.AI Solutions for expert consulting, tech solutions, and staffing.",
      buttonText: "Contact Us"
    },
    {
      img: banner3,
      title: "Harness AI to fuel your business",
      text: "Elevate your business with cutting-edge AI technology designed to scale with your ambitions.",
      buttonText: "Contact Us"
    },
    {
      img: banner1,
      title: "Grow Business Fast with uno.ai",
      text: "Empower your business with AI-driven insights for sustainable growth and innovation.",
      buttonText: "Contact Us"
    },
  ];

  return (
    <div className="bg-neutralSilver" id="home" >
      <div
        className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center"
      >
        <Carousel className="w-full mx-auto">
          {carouselItems.map((item, index) => (
            <div key={index} className="relative w-full h-96 md:h-screen">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="absolute inset-0 mb-6 md:mb-20 mx-4 md:mx-10 flex flex-col justify-end">
                  <div className="relative w-full bg-black/40 backdrop-blur-md px-4 pt-4 md:pt-2 pb-6 md:pb-4 rounded">
                    <div className="w-full mx-auto">
                      <h1 className="text-bold sm:text-3xl md:text-5xl mb-4 font-semibold text-white leading-snug">
                        {item.title}
                        <span className="text-brandPrimary leading-snug"></span>
                      </h1>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-4 md:mb-6">
                        {item.text}
                      </p>
                      <button
                        onClick={handleOpenContact}
                        className="px-4 sm:px-5 md:px-6 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey"
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          ))}
        </Carousel>


      </div>
      {showContact && <ContactUs onClose={handleCloseContact} />}
    </div>

  );
};

export default Home;

