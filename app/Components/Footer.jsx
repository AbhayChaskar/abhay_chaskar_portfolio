import React from 'react'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { IoIosMail, IoIosCall  } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram, FaRegCopyright, FaYoutube } from "react-icons/fa6";

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-12'>
        <div className='text-center'>
            <a href='https://www.youtube.com/@Melvis47' target='_blank' className='w-36 cursor-pointer mx-auto mb-2'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-24 cursor-pointer mx-auto mb-2'/>
            </a>
            <div className='w-max flex items-center text-black/80 gap-2 mx-auto dark:text-white/80'>
                <IoIosMail size={27} className='text-black/80 dark:text-white/80'/> abhayrc.521@gmail.com
                <IoIosCall  size={25} className='text-black/80 dark:text-white/80'/> +91 9146704996
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-500 mx-[10%] mt-10 py-6'> 
            <p className='flex items-center gap-1 text-black/80 dark:text-white/80'><FaRegCopyright size={20} className='text-black/80 dark:text-white/80'/> 2025. Designed & Developed by <a href="https://www.linkedin.com/in/abhaychaskar" target='_blank' className="text-blue-500">Abhay Chaskar</a>.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href='https://github.com/AbhayChaskar' target='_blank'><BsGithub size={28}/></a></li>
                <li><a href='https://www.linkedin.com/in/abhaychaskar' target='_blank'><GrLinkedin size={26} className='text-blue-500'/></a></li>
                <li><a href='https://www.youtube.com/@Melvis47' target='_blank'><FaYoutube size={34} className='text-red-500'/></a></li>
                <li><a href='https://www.instagram.com/abhay.rc_05' target='_blank'><FaInstagram size={30} className='text-red-500'/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer