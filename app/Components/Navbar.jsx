import React, { useState, useEffect, useRef} from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FiDownload } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const sideMenuRef = useRef()
    const [pdfUrl, setPdfUrl] = useState("");
    const [isPdfDownload, setPdfDownload] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(()=>{
        setPdfUrl("/abhay_chaskar_resume.pdf");
    },[])

    const handleResumeDownload = () =>{
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Abhay_Chaskar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setPdfDownload(true);
        setTimeout(() => {
            setPdfDownload(false);
        }, 2000);
    }

  return (
    <>
    {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src= {assets.navbar_background} alt='navbar_background_image' className='w-full'/>
    </div> */}

    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='' className='w-28 cursor-pointer mr-14'>
            abhay.chaskar
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-2.5 border border-gray rounded-full bg-white shadow-sm shadow-md bg-opacity-50'>
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
            { isPdfDownload ? (
                <div className='hidden lg:flex items-center gap-2 px-3.5 py-2 border border-green-500 rounded-full ml-4'>
                    Downloading...
                </div>
                ) : <a href='#resume' className='hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-400 rounded-full ml-4' onClick={handleResumeDownload}>Resume <FiDownload size={21}/></a>
            }
            <button className='block md:hidden ml-3'>
                <CgMenuRightAlt size={27} onClick={openMenu}/>
            </button>
        </div>

        {/* Side menu for small devices */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500'>
            <div className='absolute right-5 top-4'>
                <IoClose size={30} className='cursor-pointer' onClick={closeMenu}/>
            </div>
            <li><a href='' onClick={closeMenu}>Home</a></li>
            <li><a href='' onClick={closeMenu}>About me</a></li>
            <li><a href='' onClick={closeMenu}>Skills</a></li>
            <li><a href='' onClick={closeMenu}>Experience</a></li>
            <li><a href='' onClick={closeMenu}>Projects</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
            <li> { isPdfDownload ? (
                <div className='flex gap-2 text-green-500'>
                    Downloading...
                </div>
                ) : <a href='#resume' onClick={handleResumeDownload} className='flex gap-2'>Resume <FiDownload size={21}/></a> }
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar