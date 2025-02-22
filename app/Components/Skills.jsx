import React from 'react'
import { skillsData } from '@/assets/assets'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center my-8 text-5xl font-Ovo'>Skills</h2>
        {/* <h4 className='my-6 text-gray-600 font-Ovo'>Skills I Have</h4> */}
        <ul className='w-[80%] mb-10 mt-20 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-center'>
            {skillsData.map(({icon, title}, index) => (
                <li key={index} className='p-6 text-center cursor-pointer opacity-60 hover:-translate-y-2 hover:opacity-100 rounded-lg duration-300'>
                    <Image src={icon} alt={title} title={title} width={80} height={80} className='object-cover mx-auto'/>
                    {/* <h3 className='my-4 font-semibold text-gray-600'>{title}</h3> */}
                    <h2 className='text-[18px] mt-4 text-black/70 font-semibold items-center'>{title}</h2>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Skills