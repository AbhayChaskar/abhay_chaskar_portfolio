import React from 'react'
import { skillsData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react';

const Skills = () => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className='text-center my-4 text-5xl font-Ovo'>Skills</motion.h2>

        <motion.ul initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.7, duration: 0.5}} className='w-[80%] mb-10 mt-20 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-center'>
            {skillsData.map(({icon, title}, index) => (
                <li key={index} className='p-6 text-center cursor-pointer opacity-60 hover:-translate-y-2 hover:opacity-100 rounded-lg duration-300'>
                    <Image src={icon} alt={title} title={title} width={80} height={80} className='object-cover mx-auto'/>
                    {/* <h3 className='my-4 font-semibold text-gray-600'>{title}</h3> */}
                    <h2 className='text-[18px] mt-4 text-black/80 font-semibold items-center dark:text-white/80'>{title}</h2>
                </li>
            ))}
        </motion.ul>
    </motion.div>
  )
}

export default Skills