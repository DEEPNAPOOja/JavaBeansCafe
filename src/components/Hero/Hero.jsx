import React from "react";
import BgImage from "../../assets/bg-slate.png";
import BlackCoffee from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* Navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* Text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.5,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Java Jar
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.7,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Bold Flavors, Rich Culture,</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Immerse yourself in our curated coffee blends that celebrate
                    Black heritage and lifestyle. Each cup offers a unique taste
                    experience inspired by culture and passion
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </motion.div>
            </div>

            {/* Hero Image section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
            >
              <img
                src={BlackCoffee}
                alt="Black Coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow transform rotate-6"
              />
              {/* Orange circle ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"
              ></motion.div>

              {/* Big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Tumbler
                </h1>
              </motion.div>
            </motion.div>

            {/* Empty Third Section */}
            <div></div>
          </div>
        </div>

        {/* Sidebar Menu section */}
        {sidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10"
          >
            <div className="w-full h-full flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social Icons */}
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-2xl" />
                </div>
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </div>
                <div
                  className="inline-block p-2 rounded-full cursor-pointer border border-white"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </div>

                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
