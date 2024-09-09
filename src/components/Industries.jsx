import React from "react";
import government from "../assets/icons/government-icon.png"
import defence from "../assets/icons/defence-icon.png"
import health from "../assets/icons/health-icon.png"
import internal from "../assets/icons/internal-icon.png"
import cyber from "../assets/icons/cyber-security-icon.png"
import commercial from "../assets/icons/commercial-icon.png"

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const industries = [
  { name: 'Government', icon: government },
  { name: 'Defence', icon: defence },
  { name: 'Health', icon: health },
  { name: 'Internal Security', icon: internal },
  { name: 'Cyber Security', icon: cyber },
  { name: 'Commercial', icon: commercial }
];


const Industries = () => {
  return (
    <div className="bg-neutralSilver ">
      <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="industries">


        <div className="text-center mb-8 px-2">
          <h2 className="text-4xl text-neutral-800 font-semibold">Industries we serve</h2>
        </div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-8"
        >
          {industries.map((industry) => (
            <div
              key={industry.name} // Adding a unique key attribute
              className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-60 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-700 transition-all duration-300 flex items-center justify-center h-full"
            >
              <img
                src={industry.icon}
                alt={industry.name}
                className="w-16 h-16 mb-4"
                style={{ filter: 'invert(38%) sepia(47%) saturate(1120%) hue-rotate(60deg) brightness(92%) contrast(101%)' }} // This filter approximates the color #4CAF4F
              />
              <h3 className="text-xl text-neutral-800 font-semibold">{industry.name}</h3>
            </div>
          ))}
        </motion.div>


      </div>
    </div>

  );
};

export default Industries;
