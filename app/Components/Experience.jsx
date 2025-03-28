import React from 'react'
import Image from 'next/image'
import { assets, experienceData } from '@/assets/assets'

const Experience = ({isDarkMode}) => {
  return (
    <div id="experience" className='w-full px-[12%] py-14 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Experience</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='flex-1'>
          <p className='text-center mx-auto mb-12'>
            With 4 years of experience in development and expertise in both Front-end & Back-end technologies, I have been delivering user experience & client-focused projects. Enhanced load times by 30% and had an 90% client retention rate through effective communication and co-ordination with cross-functional teams.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {experienceData.map((experience, index) => (
              <li key={index} className='border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-gray dark:hover:bg-darkHover dark:hover:shadow-gray'>
                  <div className='flex items-center mt-2 gap-20'>
                      <Image src={isDarkMode ? experience.dark_icon : experience.icon} alt={experience.title} className='flex w-20'/>
                      <p className='text-black/60 mx-auto dark:text-white/60'>{experience.duration}</p>
                  </div>
                  <div>
                    <h3 className='my-2 font-semibold text-gray-600 dark:text-white/85'>{experience.title}</h3>
                    <ul className='list-disc mx-4'>
                      {experience.description.map((description, descriptionIndex) => (
                        <li key={descriptionIndex} className='text-gray-600 text-sm dark:text-white/60'>{description}</li>
                      ))}
                    </ul>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience