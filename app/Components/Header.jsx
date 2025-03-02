import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";
import { PiHandPeace } from "react-icons/pi";
import { IoIosArrowDropright } from "react-icons/io";

const Header = () => {
  const router = useRouter();

  const handleConnectButton = () =>{
    router.push('https://www.linkedin.com/in/abhaychaskar/');
  }
  
  return (
    <div id="home" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_image} alt='profile_image' className='rounded-full w-32'/>
      </div>

      <h3 className='flex item-end gap-1.5 font-Ovo text-xl md:text-2xl mb-3 '>Hey! I'm Abhay Chaskar <PiHandPeace size={27}/></h3>
      <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Frontend/UI Developer</h3>
      <p className='max-w-2xl mx-auto'>I have over 4 years of full-time experience in the IT industry, where I have developed and managed SPAs using ReactJS and related libraries or frameworks.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='' className='py-2.5 px-6 w-max flex items-center gap-2 justify-between bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' onClick={handleConnectButton}>Let's Connect <IoIosArrowDropright size={20}/></a>
      </div>
    </div>
  )
}

export default Header