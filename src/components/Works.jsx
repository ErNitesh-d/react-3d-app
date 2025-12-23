import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-4 rounded-2xl w-full"
      >
        {/* Image */}
        <div className="relative w-full h-[260px] bg-white rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-3">
          <h3 className="text-white font-semibold text-[16px]">
            {name}
          </h3>
          <p className="mt-0 text-secondary text-[11px] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



const Works = () => {
  return (
   <>
     <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
          My Work
      </p>
      <h2 className={styles.sectionHeadText}> 
          Projects.
      </h2>
    </motion.div>

          <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[14px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
       {projects.map((project, index) => (
         <ProjectCard
           key={`project-${index}`}
           index={index}
           {...project}
         />
       ))}
     </div>

   </>
  )
}

export default SectionWrapper(Works, "");
