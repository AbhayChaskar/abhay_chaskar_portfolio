import React from 'react'
import Image from 'next/image'
import { assets, aboutList, toolsData } from '@/assets/assets'
import { motion } from 'motion/react';

const About = ({isDarkMode}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id="about" className='w-full px-[12%] py-14 scroll-mt-20'>
        <motion.h2 initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}} className='text-center text-5xl font-Ovo'>About Me</motion.h2>
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div initial={{opacity: 0, scale: 0.9}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.6}} className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.full_profile} alt='full_profile' className='w-full rounded-3xl'/>
            </motion.div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl'>
                    An experienced Frontend Developer with strong discipline, a team-oriented mindset, excellent problem-solving abilities and great communication skills.
                    The one Who always seeks a challenging role to contribute and grow within a reputable organization
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {aboutList.map(({icon, iconDark, title, description}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-gray dark:border dark:hover:shadow-gray dark:hover:bg-darkHover'>
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-600 dark:text-white/60'>{title}</h3>
                            <p className='text-gray-500 text-sm dark:text-white/40'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/60'>Tools I Use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map(({icon, title}, index) => (
                        <li key={index} className='flex items-center justify-center pb-2 w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={icon} alt={title} title={title} className='w-7 sm:w-7 mt-3'/>
                            {/* <h3 className='my-4 font-semibold text-gray-600'>{title}</h3> */}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default About