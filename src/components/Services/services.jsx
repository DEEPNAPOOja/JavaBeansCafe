import React from "react";
import { motion } from "framer-motion";
import coffee1 from "../../assets/coffee/coffee1.png";
import coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "Black coffee",
    subtitle: "Pure coffee, bold flavor—nothing but the essentials.",
  },
  {
    id: 2,
    image: coffee3,
    title: "Hot coffee",
    subtitle: "Warm up with the comforting embrace of a hot brew",
  },
  {
    id: 3,
    image: coffee1,
    title: "Cold coffee",
    subtitle: "Cool, crisp, and energizing—your perfect pick-me-up",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10, // Corrected: replaced the period with a comma
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2, // Add Delay
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4, // Add Delay
          }}
          className="text-sm opacity-50"
        >
          Where the Aroma Draws You In and the Taste Keeps You Coming Back
        </motion.p>
      </div>
      {/* Card Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Corrected: Removed curly braces
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {servicesData.map((service) => (
          <motion.div
            variants={cardVariants}
            className="text-center p-4 space-y-6" // Removed duplicate className
            key={service.id} // Moved key prop here
          >
            {/* Image with hover effect */}
            <img
              src={service.image}
              alt={service.title}
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray">{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
