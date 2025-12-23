import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { workPhilosophy } from "../constants";

const PhilosophyCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.6)}
    className="bg-tertiary rounded-xl p-5 shadow-card 
               flex flex-col items-center text-center gap-3
               hover:bg-white/5 transition w-full"
  >
    {/* Icon */}
    <div className="w-12 h-12 rounded-full bg-[#915EFF] 
                    flex items-center justify-center text-xl">
      {icon}
    </div>

    {/* Title */}
    <h3 className="text-white font-semibold text-[16px]">
      {title}
    </h3>

    {/* Short description */}
    <p className="text-secondary text-[13px] leading-snug">
      {description}
    </p>
  </motion.div>
);


const HowIWork = () => {
  return (
    <div className='mt-0'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Approach</p>
        <h2 className={styles.sectionHeadText}>How I Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I focus on writing clean, maintainable code, designing scalable architectures, 
        and building user-centric applications with performance and security in mind.
      </motion.p>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {workPhilosophy.map((item, index) => (
          <PhilosophyCard
            key={item.title}
            index={index}
            {...item}
          />
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(HowIWork, "work");