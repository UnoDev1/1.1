import React, { useState } from "react";
import { Footer, TextInput } from "flowbite-react";
import { SiMinutemailer } from "react-icons/si";
import logo from "../assets/logo.png";
import iso_9001 from "../assets/ISO-9001.png";
import iso_27001 from "../assets/ISO-27001.png";
import nasscom from "../assets/nasscom.jpg";
import ContactUs from "./ContactUs";

const MyFooter = () => {

  const [showContact, setShowContact] = useState(false);

  const handleOpenContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <>
      <footer className="bg-neutralBlack text-white">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
          <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
            <div className="mt-2">
              <a
                href=""
                className="text-2xl font-semibold flex items-center space-x-3"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-10 inline-block items-center"
                />
                <span>UNO.AI</span>
              </a>
              <div className="my-8">
                <p className="mb-1"> Copyright © 2024 Uno.Ai Solutions LLC</p>
                <p>All rights reserved</p>
              </div>

              <div className="mt-4 flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 sm:justify-start text-white">
                <a href="https://drive.google.com/file/d/1-Q29JoZeuhz5UInAE3hKuy67eDzpO6M9/view?usp=sharing"  target="_blank" rel="noopener noreferrer">
                  <img src={iso_9001} alt="ISO 9001" className="w-10 h-auto sm:w-12 md:w-14 lg:w-16" />
                </a>
                  <img src={nasscom} alt="Nasscom" className="w-10 h-auto sm:w-12 md:w-14 lg:w-16" />
                <a href="https://drive.google.com/file/d/1-dNxFQg8iJS6wmQMsrj8hUz1iyolGE55/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <img src={iso_27001} alt="ISO 27001" className="w-10 h-auto sm:w-12 md:w-14 lg:w-16" />
                </a>
              </div>
              
            </div>

            <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
              <div>
                <Footer.Title title="Company" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-white">
                    About us
                  </Footer.Link>
                  <Footer.Link href="#" className="text-white">
                    Blog
                  </Footer.Link>
                  <Footer.Link href="#" className="text-white" onClick={handleOpenContact}>
                    Contact us
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Support" className="text-white" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-white">
                    Terms of service
                  </Footer.Link>
                  <Footer.Link href="#" className="text-white">
                    Legal
                  </Footer.Link>
                  <Footer.Link href="#" className="text-white">
                    Privacy policy
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Stay up to date" className="text-white" />
                <div className="max-w-md text-white">
                  <div className="mb-2 block"></div>
                  <TextInput
                    id="email4"
                    placeholder="name@domain.com"
                    required
                    rightIcon={SiMinutemailer}
                    type="email"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
      {showContact && <ContactUs onClose={handleCloseContact} />}
    </>
  );
};

export default MyFooter;
