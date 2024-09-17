import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaMapMarkerAlt,
} from "react-icons/fa";
//import { FaMapLocation } from "react-icons/fa";
import CreditCCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold uppercase"> Java Beans Cafe</h1>
            <p className="text-sm max-w-[300px]">
              At Java Beans Café, we craft exceptional coffee blends inspired by
              heritage and passion. Reach out anytime—we’re here to bring the
              perfect brew to your cup!
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +94 77 5544 331
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapMarkerAlt /> Colombo 5,Sri Lanka.
              </p>
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            div
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold"> Quick Links </h1>
            <div className="grid grid-cols-2 gap-3">
              {/* first column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              {/* Second column section */}
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Link sections */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold"> Follow Us </h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-2"> Payment Methods </h1>
              <img src={CreditCCards} alt="credit cards" className="w-[80%]" />
            </div>
          </motion.div>
        </div>
        {/* copyright Section */}
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            delay: 0.4,
            duration: 0.4,
          }}
          className="text-white text-center mt-8 pt-border-t-2"
        >
          Copyright &copy; 2024 Company Name.All rights reserved.
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
