import React, { useState } from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/bohemian-man-thinking.png";
import banner2 from "../assets/business-woman-presenting-laptop.png";
import banner3 from "../assets/young-woman-working-laptop-isolated-white-background.png";
import ContactUs from "./ContactUs"; // Adjust the path as necessary

const Home = () => {
  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  const carouselItems = [
    {
      img: banner1,
      title: "Transforming Businesses using AI",
      text: "Unlock the power of AI and digital transformation with Uno.AI Solutions. We provide expert consulting, innovative technology solutions, and staffing services to help businesses thrive in the digital age.",
      buttonText: "Contact Us"
    },
    {
      img: banner2,
      title: "Harness AI to fuel your business",
      text: "Elevate your business with cutting-edge AI technology designed to scale with your ambitions.",
      buttonText: "Contact Us"
    },
    {
      img: banner3,
      title: "Grow Business Fast with uno.ai",
      text: "Empower your business with AI-driven insights for sustainable growth and innovation.",
      buttonText: "Contact Us"
    },
  ];

  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          {carouselItems.map((item, index) => (
            <div key={index} className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
              <div>
                <img src={item.img} alt=""  className="object-cover"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                  {item.title} <span className="text-brandPrimary leading-snug"></span>
                </h1>
                <p className="text-neutralGrey text-base mb-8">
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
          ))}
        </Carousel>
      </div>
      {showContact && <ContactUs onClose={handleCloseContact} />}
    </div>
  );
};

export default Home;

