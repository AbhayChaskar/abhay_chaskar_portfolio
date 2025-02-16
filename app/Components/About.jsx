import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.full_profile} alt='full_profile' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl'>
                    An experienced Frontend Developer with strong discipline, a team-oriented mindset, excellent problem-solving abilities and great communication skills.
                    The one Who always seeks a challenging role to contribute and grow within a reputable organization
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-gray'>
                            <Image src={icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-600'>{title}</h3>
                            <p className='text-gray-500 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-600 font-Ovo'>Tools I Use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map(({icon, title}, index) => (
                        <li key={index} className='flex items-center justify-center pb-2 w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <Image src={icon} alt={title} title={title} className='w-7 sm:w-7 mt-3'/>
                            {/* <h3 className='my-4 font-semibold text-gray-600'>{title}</h3> */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About