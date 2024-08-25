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
      title: "Transforming Businesses using AI",
      text: "Unlock the power of AI and digital transformation with Uno.AI Solutions. We provide expert consulting, innovative technology solutions, and staffing services to help businesses thrive in the digital age.",
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
                {/* Full-width Blurred Background Container */}
                <div className="absolute inset-0 mb-20 mx-10 flex flex-col justify-end">
                  <div className="relative w-full bg-black/40 backdrop-blur-md px-4 pt-1 pb-4 rounded">
                    <div className="w-full mx-auto ">
                      <h1 className="text-5xl mb-4 font-semibold text-white leading-snug">
                        {item.title} <span className="text-brandPrimary leading-snug"></span>
                      </h1>
                      <p className="text-white text-base mb-8">
                        {item.text}
                      </p>
                      <button
                        onClick={handleOpenContact}
                        className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey"
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

