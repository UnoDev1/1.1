import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const AboutUs = () => {

  return (

    <div className="bg-neutralSilver md:px-14 px-4 py-12 lg:py-16 max-w-screen-2xl mx-auto" id="aboutus">

      <div className="text-center mb-8 px-2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-neutral-800 font-semibold">About Us</h2>
      </div>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="mt-10 sm:mt-12 lg:mt-14 md:w-10/12 w-full mx-auto gap-8 text-left"
      >
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed text-justify">
          With over 30 years of consulting experience, our company delivers a diverse portfolio of expertise tailored to Federal Government, Healthcare, Retail, and Automobile industry clients. Our passion for technology, innovation, and commitment to continuous learning are key drivers to our success.
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed text-justify mt-4">
          We offer end-to-end solutions to our clients and specialize in:
        </p>
        <ul className="list-disc ml-4 sm:ml-6 lg:ml-8 mt-4 text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed text-justify">
          <li>Providing telecommunication and emerging wireless communication solutions</li>
          <li>Offering digital transformation services to modernize and enhance operations</li>
          <li>Assisting organizations in implementing Artificial Intelligence for competitive advantage</li>
          <li>Deploying cybersecurity solutions to safeguard critical business data</li>
          <li>Developing and implementing corporate strategies for overall business growth and success</li>
        </ul>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed lg:leading-relaxed text-justify mt-4">
          We are committed to harnessing the power of technology to boost business efficiency, reduce costs, and save time. By staying at the forefront of IT advancements, we offer tailored solutions that optimize operational performance and create long-term value. Our mission is to guide organizations through today’s complexities while preparing them for future success in an ever-changing digital world.
        </p>
      </motion.div>
    </div>

  );

};

export default AboutUs;
