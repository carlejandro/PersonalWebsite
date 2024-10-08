import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// <p>{title}</p> the bottom is a component 
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card" //This is the shadow card code that makes it cool 
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450 
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
            <img src={icon} alt={title} 
            className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
        
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      className="mt-7"> 
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 text-secondary text-[17px] 
        max-w-3xl leading-[30px]">
          I am a skilled software developer with Experience
          in Object Oriented Programming, Database Systems, and Advanced
          Website Development. I have expertise in frameworks like React, Node.js, and Three.js.
          I'm a quick study and truly have a passion for helping people
          in everything that I do. Thanks for checking out my site and learning a bit about me!
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index = {index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(About, "about")