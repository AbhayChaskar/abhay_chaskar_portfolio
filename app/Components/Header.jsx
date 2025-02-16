import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useRouter } from "next/navigation";
import { PiHandPeace } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";

const Header = () => {
  const router = useRouter();

  const handleConnectButton = () =>{
    router.push('https://www.linkedin.com/in/abhaychaskar/');
  }
  
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_image} alt='profile_image' className='rounded-full w-32'/>
      </div>

      <h3 className='flex item-end gap-1.5 font-Ovo text-xl md:text-2xl mb-3 '>Hey! I'm Abhay Chaskar <PiHandPeace size={27}/></h3>
      <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Frontend/UI Developer</h3>
      <p className='max-w-2xl mx-auto'>I have 4+ years of full time experience in the IT industry, where i have developed and managed SPA's using ReactJS and related libraries or frameworks.</p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='' className='px-6 py-2 border border-white rounded-full bg-black text-white flex items-center' onClick={handleConnectButton}>Let's Connect <GrLinkedin className='rounded-full w-10' size={20}/></a>
      </div>
    </div>
  )
}

export default Header