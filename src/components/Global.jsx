import React from "react";
import earth from "../assets/earth.png"

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Product = () => {
  return (
    <div className="my-12" id="global">
      <div className="text-center px-2">
        <h2 className="text-4xl text-neutral-800 font-semibold">Global Presence</h2>
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto mb-12">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={earth} alt="" className="w-[90%] h-[90%] max-w-[90%] max-h-[90%] blur-sm hover:blur-none" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-3/5 mx-auto">
            
            <p className="md:w-3/4 text-2xl text-neutralGrey mb-8">
              Our strategy and technology consultants have empowered our international clients with the knowledge and experience they need to build their own local resources and capabilities
            </p>
          </motion.div>
        </div>
      </div> 
    </div>
  );
};

export default Product;
