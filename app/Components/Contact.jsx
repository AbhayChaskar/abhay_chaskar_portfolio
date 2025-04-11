import React, {useEffect, useState} from 'react'
import { IoIosArrowDropright } from "react-icons/io";
import { motion } from 'motion/react';

const Contact = () => {
  const [username, setUsername] = useState("");
  const handleFormSubmit = (FormData) =>{
    const data = Object.fromEntries(FormData.entries()); 
    console.log(data);
    setUsername(data.username);
  }
  useEffect(()=>{
    if(username){
      setTimeout(() => {
        setUsername("");
      }, 3000);
    }
  }, [username])
  
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} id="contact" className='w-full px-[12%] py-12 scroll-mt-20'>
        <motion.h2 initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}} className='text-center text-5xl font-Ovo'>Contact Me</motion.h2>
        <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.7, duration: 0.5}}  className='text-center max-w-2xl mx-auto mt-16 mb-12'>
            Whether you have a questions, want to collaborate on a project or just want to give a feedback then my inbox is always open. I'd love to hear from you ^-^
        </motion.p>

        <motion.form initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.9, duration: 0.5}} className='max-w-2xl mx-auto' action={handleFormSubmit}>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <motion.input initial={{x: -50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.6}} type='text' name="username" placeholder='Your Full Name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-md dark:bg-darkHover dark:border-white/30' required/>
                <motion.input initial={{x: 50, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.6}}  type='email' name="email_Id" placeholder='Your Email ID' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-md dark:bg-darkHover dark:border-white/30' required/>
            </div>
            <motion.textarea initial={{y: 100, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 1.1, duration: 0.6}} rows='6' name='feedback' placeholder='Leave your Feedback here...' autoComplete='false' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 shadow-md dark:bg-darkHover dark:border-white/30' required></motion.textarea>
            {username ? <h3 className='py-2 px-6 w-max flex items-center justify-between gap-2 text-black/80 rounded-full mx-auto duration-500'>Thanks<b>{username}</b>for your feedback...</h3> : <motion.button initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 1.2}} type='submit' className='py-2 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border-none dark:bg-white/80 dark:hover:bg-white dark:duration-500 dark:text-black'>Send <IoIosArrowDropright size={20}/> </motion.button> }
        </motion.form>
    </motion.div>
  )
}

export default Contact