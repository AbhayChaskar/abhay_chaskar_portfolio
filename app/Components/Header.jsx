import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";
import { PiHandPeace } from "react-icons/pi";
import { IoIosArrowDropright } from "react-icons/io";
import { motion } from 'motion/react';

const Header = () => {
  const router = useRouter();

  const handleConnectButton = () =>{
    router.push('https://www.linkedin.com/in/abhaychaskar/');
  }
  
  return (
    <div id="home" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}}>
        <Image src={assets.profile_image} alt='profile_image' className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 initial={{y: -10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.5, delay: 0.2}} className='flex item-end gap-1.5 font-Ovo text-xl md:text-2xl mb-3 '>Hey! I'm Abhay Chaskar <PiHandPeace size={27}/></motion.h3>
      <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.7, delay: 0.4}} className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Frontend/UI Developer</motion.h3>
      <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 0.5, delay: 0.6}} className='max-w-2xl mx-auto'>I have over 4 years of full-time experience in the IT industry, where I have developed and managed SPAs using ReactJS and related libraries or frameworks.</motion.p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 1.2}} href='' className='py-2.5 px-6 w-max flex items-center gap-2 justify-between bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border-none dark:bg-white/80 dark:hover:bg-white dark:duration-500 dark:text-black' onClick={handleConnectButton}>Let's Connect <IoIosArrowDropright size={20}/></motion.a>
      </div>
    </div>
  )
}

export default Header