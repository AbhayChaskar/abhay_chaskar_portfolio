import React from 'react'
import Image from 'next/image'
import { assets, experienceData, infoList, toolsData } from '@/assets/assets'

const Experience = () => {
  return (
    <div id="experience" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>Experience</h2>

         <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
          <div className='flex-1'>
              {/* <p className='mb-10 mx-auto'>
                  An experienced Frontend Developer with strong discipline, a team-oriented mindset, excellent problem-solving abilities and great communication skills.
                  The one Who always seeks a challenging role to contribute and grow within a reputable organization
              </p> */}

              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
                  {experienceData.map(({icon, title, description, duration}, index) => (
                    <>
                      <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-gray'>
                          <div className='flex items-center mt-2 gap-20'>
                              <Image src={icon} alt={title} className='flex w-16'/>
                              <p className='text-black/50 mx-auto'>{duration}</p>
                          </div>
                          <div>
                            <h3 className='my-2 font-semibold text-gray-600'>{title}</h3>
                            <p className='text-gray-500 text-sm'>{description}</p>
                          </div>
                      </li>
                    </>
                  ))}
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Experience