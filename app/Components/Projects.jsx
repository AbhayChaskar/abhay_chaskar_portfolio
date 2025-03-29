import React from 'react'
import { projectData } from '@/assets/assets'
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

const Projects = () => {
  const router = useRouter();

  const handleExploreButton = () => {
    router.push('https://github.com/AbhayChaskar/');
  }

  return (
    <div id="projects" className='w-full px-[12%] py-12 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>
        <p className='text-center max-w-2xl mx-auto mt-12 mb-12'>
          I have worked on major projects that have helped me enhance my skills & knowledge in the field of web development. Check out some of them here!
        </p>

      <div className='w-[80%] mb-10 mt-20 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-20 items-center'>
        {projectData.map((project, index) =>(
          <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} className='aspect-square w-60 bg-no-repeat bg-cover bg-center rounded-lg relative hover:shadow-lg cursor-pointer group'>
            <div className='bg-white w-10/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-500 group-hover:bottom-5'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <a href={project.repoLink} target='_blank' className='text-sm text-black/70 hover:text-blue-600'>Source Code</a>
              </div>
              <div className='rounded-full border border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-black/20 transition'>
                <a href={project.deployLink} target='_blank' className=''><FaArrowRightLong className='rounded-full w-10' size={20}/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
        <a href='' className='py-2 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border-none dark:bg-white/80 dark:hover:bg-white dark:duration-500 dark:text-black' onClick={handleExploreButton}>Know More <IoIosArrowDropright size={20}/></a>
    </div>
  )
}

export default Projects