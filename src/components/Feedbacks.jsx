import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { workPhilosophy } from "../constants";

const PhilosophyCard = ({ index, title, description, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-tertiary p-8 rounded-3xl w-full sm:w-[48%] lg:w-[48%] shadow-card'
  >
    <div className='flex items-center gap-4 mb-4'>
      <div className='w-16 h-16 rounded-full bg-[#915EFF] flex items-center justify-center text-3xl'>
        {icon}
      </div>
      <h3 className='text-white font-bold text-[22px]'>{title}</h3>
    </div>
    
    <p className='text-secondary text-[17px] leading-[26px]'>
      {description}
    </p>
  </motion.div>
);

const HowIWork = () => {
  return (
    <div className='mt-12'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Approach</p>
        <h2 className={styles.sectionHeadText}>How I Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I focus on writing clean, maintainable code, designing scalable architectures, 
        and building user-centric applications with performance and security in mind.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-7 justify-between'>
        {workPhilosophy.map((philosophy, index) => (
          <PhilosophyCard key={`philosophy-${index}`} index={index} {...philosophy} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(HowIWork, "work");