import React, { useState } from "react";
import earth from "../assets/earth.png";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Careers = () => {
  const [selectedOption, setSelectedOption] = useState("Analytics/Data-Science");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Analytics/Data-Science":
        return <p>Dedicated to harnessing the power of data. Explore analytics and data science positions to learn more. </p>;
      case "Commercial":
        return <p>Looking to protect the world's most respected brands from sophisticated cyber crime? So are we. Discover open jobs with a commercial focus</p>;
      case "Consulting":
        return <p>Eager to revolutionize how organizations work? Review our open consulting jobs to learn more</p>;
      case "Corporate-Functions":
        return <p>Ready to keep the internal gears of our company moving? Find a position that moves you by exploring our corporate-focused positions</p>;
      case "Cyber":
        return <p>Passionate about stopping cyber attacks before they occur? Get started by discovering cybersecurity job opportunities</p>;
      case "Digital":
        return <p>Focused on building advanced systems? Take a look at our current digital job openings and forge a new future</p>;
      case "Engineering":
        return <p>Driven by designing solutions to complex technical problems? Put your problem-solving skills to use by exploring our engineering jobs</p>;
      case "Health&Science":
        return <p>Dedicated to the physical and emotional wellbeing of people? Review open jobs in health and science and learn more</p>;
      case "Intelligence-Analysis":
        return <p>Eager to help our clients understand their operational landscape? Explore intelligence analysis jobs to learn more  </p>;
      case "Mission-Focused-Careers":
        return <p>Ready to address the government and military's biggest challenges? Review open jobs and learn more about our mission focus</p>;
      default:
        return <p>Please select an option.</p>;
    }
  };

  return (
    <div className="my-6" id="careers">

      <div className="text-center px-2">
        <h2 className="text-4xl text-neutral-800 font-semibold">Careers</h2>
        <h3 className="text-1xl text-neutral-600 font-semibold">
          Search open jobs and find positions that match your skills, interests, and location
        </h3>
      </div>

      <div className="relative px-4 lg:px-14 max-w-screen-2xl mx-auto mb-12 h-screen">
        <div className="relative flex h-full">
          {/* Dropdown */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 h-full flex items-center justify-center p-4"
          >
            <select
              value={selectedOption}
              onChange={handleDropdownChange}
              className="
          w-1/2 
          p-2
          text-black 
          bg-white
          border
          border-brandPrimary 
          rounded 
          focus:ring-0
          focus:border-brandPrimary
        "
            >
              <option value="Analytics/Data-Science">Analytics/Data Science</option>
              <option value="Commercial">Commercial</option>
              <option value="Consulting">Consulting</option>
              <option value="Corporate-Functions">Corporate Functions</option>
              <option value="Cyber">Cyber</option>
              <option value="Digital">Digital</option>
              <option value="Engineering">Engineering</option>
              <option value="Health&Science">Health & Science</option>
              <option value="Intelligence-Analysis">Intelligence Analysis</option>
              <option value="Mission-Focused-Careers">Mission-Focused Careers</option>
            </select>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-1/2 h-full p-4 "
          >
            <div className="h-full flex items-center justify-center">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  );

};

export default Careers;
