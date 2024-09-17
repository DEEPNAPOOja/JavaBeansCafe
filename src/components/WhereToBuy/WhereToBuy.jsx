import React from "react";
import WorldMap from "../../assets/world-map.png";
import { motion } from "framer-motion";

const WhereToBuy = () => {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
        {/* Form Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <h1 className="text-4xl font-bold text-darkGray font-serif">
            Purchase our products from wherever you are
          </h1>
          <div className="flex items-center gap-4 ">
            <input
              type="text"
              placeholder="Name"
              className="input-style w-full lg:w-[150px]"
              aria-label="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="input-style w-full"
              aria-label="Email"
            />
          </div>
          <div className="flex items-center gap-4 ">
            <input
              type="text"
              placeholder="Country"
              className="input-style w-full"
              aria-label="Country"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="input-style w-full"
              aria-label="Zipcode"
            />
          </div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="primary-btn w-full "
          >
            {" "}
            Order Now
          </motion.button>
        </motion.div>
        {/* World Map Section */}
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1,
            }}
            src={WorldMap}
            alt="World Map"
            className="w-full sm:w-[500px] mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhereToBuy;
