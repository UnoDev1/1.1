import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import membership from "../assets/icons/membership.png"
import association from "../assets/icons/association.png"
import groupclub from "../assets/icons/group-club.png"

const PioneeringExperties = () => {
  const pioneeringExperties = [
    {
      id: 1,
      title: "Membership Organisations",
      decription:
        "In the realm of Artificial Intelligence, we stand as the vanguard, revolutionizing the world through AI solutions that provide immediate value and sustained performance. ",
      image: membership,
    },
    {
      id: 2,
      title: "Enabling Innovation",
      decription:
        "Our path breaking Uno.AI innovation platform allows organisations to manifest ideas into reality.",
      image: association,
    },
    {
      id: 3,
      title: "Technology Strategy and Business Consulting",
      decription:
        "With more than 5 decades of technology and management consulting expertise by our partners, Uno.AI supports both large-scale transformation and targeted problem-solving. We are part of your core fabric —from idea to value. ",
      image: groupclub,
    },
    {
      id: 4,
      title: "Intelligent Cybersecurity",
      decription:
        "Uno.AI takes pride in protecting our clients against the attacks of today and prepare them for the threats of the future. Through decades of experience and the most sophisticated tools available, we keep you secure and your business moving forward",
      image: association,
    },
    {
      id: 5,
      title: "Digital Capabilities",
      decription:
        "We're trusted to enable the world's most promising missions through digital transformation—with solutions that deliver the apt capabilities with the most valuable insights at your fingertips.",
      image: association,
    },
    {
      id: 6,
      title: "Advanced Engineering",
      decription:
        "Pioneering next-gen tools & products with world-class engineering expertise centered in multiple R&D labs across North America, Europe and Asia.",
      image: association,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="pioneeringExperties">

      <div className="text-center mb-8 px-2">
        <h2 className="text-4xl text-neutral-800 font-semibold">Pioneering Experties</h2>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {pioneeringExperties.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-green-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PioneeringExperties;
