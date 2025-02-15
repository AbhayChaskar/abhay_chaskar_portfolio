import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src= {assets.navbar_background} alt='navbar_background_image' className='w-full'/>
    </div>

    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='' className='w-28 cursor-pointer mr-14'>
            abhay.chaskar
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full bg-white shadow-sm bg-opacity-50'>
            <li><a href=''>Home</a></li>
            <li><a href=''>About me</a></li>
            <li><a href=''>Skills</a></li>
            <li><a href=''>Experience</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
                <IoMoonSharp size={20}/>
            </button>
            <a href='' className='hidden lg:flex items-center gap-3 px-6 py-2.5 border border-gray-400 rounded-full ml-4'>Resume <FiDownload size={21}/></a>
        </div>
    </nav>
    </>
  )
}

export default Navbar