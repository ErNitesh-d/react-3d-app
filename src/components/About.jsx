import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';

import {SectionWrapper} from "../hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.6)}
        className="w-full green-pink-gradient p-[1px] rounded-[14px]"
      >
        <div
          className="bg-tertiary rounded-[14px] py-4 px-4 
                     h-[200px] flex flex-col justify-center items-center gap-3"
        >
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain"
          />

          <h2 className="text-white text-[15px] font-semibold text-center">
            {title}
          </h2>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
   </motion.div>
   
    <motion.p variants={fadeIn("", "", 0.1, 1)} 
              className="mt-0 text-secondary text-[14px] max-w-3xl leading-[30px]">
         I’m a passionate full-stack developer skilled in Java, Spring Boot, and React. 
         I enjoy building scalable backend systems, clean REST APIs, and responsive, 
         user-friendly interfaces. My focus is on writing efficient code, creating smooth 
         interactions, and delivering high-quality digital experiences across both web 
         and mobile platforms.
    </motion.p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {services.map((service, index) => (
             <ServiceCard key={service.title} index={index} {...service} />
             ))}
      </div>

   </>
  );
}

export default SectionWrapper(About,"about")