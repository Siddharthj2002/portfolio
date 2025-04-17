import { useState } from "react";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechItem = ({ tech }) => {
  const [showLabel, setShowLabel] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const toggleLabel = () => {
    if (isMobile) {
      setShowLabel((prev) => !prev);
    }
  };

  return (
    <motion.div
      key={tech.name}
      onClick={toggleLabel}
      whileHover={{ scale: 1.1 }}
      className={`w-24 h-24 flex items-center justify-center rounded-full shadow-lg relative group cursor-pointer transition-all duration-300
        ${isMobile && showLabel ? "bg-gray-300/40 backdrop-blur-sm" : "bg-white"}
        `}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Icon */}
      <img
        src={tech.icon}
        alt={tech.name}
        className={`w-12 h-12 object-contain transition-opacity duration-300 z-10
          ${
            isMobile
              ? showLabel
                ? "opacity-30"
                : "opacity-100"
              : "group-hover:opacity-30"
          }
        `}
      />

      {/* Name Overlay */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 pointer-events-none
          ${
            isMobile
              ? showLabel
                ? "opacity-100 bg-gray-300/40 backdrop-blur-sm rounded-full"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100 bg-gray-300/40 backdrop-blur-sm rounded-full"
          }
        `}
      >
        <div className="text-black text-sm font-semibold px-2 py-1">
          {tech.name}
        </div>
      </div>
    </motion.div>
  );
};


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Skills</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Tech Stack.</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((tech) => (
          <TechItem key={tech.name} tech={tech} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
