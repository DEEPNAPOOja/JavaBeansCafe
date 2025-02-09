import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar = ({ sidebar, setSidebar }) => {
  // Fix: Destructure props correctly
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-40">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Java</span> Beans Cafe
          </motion.h1>
          {/* HamburgerMenu section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setSidebar(!sidebar)} // Correctly toggles the sidebar
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
