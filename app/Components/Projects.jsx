import { projectData } from '@/assets/assets'
import React from 'react'
import { GrLinkedin } from "react-icons/gr";

const Projects = () => {

  const handleExploreButton = () =>{
    console.log('Explore button clicked');
  }

  return (
    <div id="projects" className='w-full px-[12%] py-12 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo'>Projects</h2>
      
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='flex-1'>
          <p className='text-center max-w-2xl mx-auto mb-12'>
            I have worked on major projects that have helped me enhance my skills & knowledge in the field of web development. Check out some of them here!
          </p>

          <div className='grid grid-cols-auto my-10 gap-5'>
            {projectData.map((project, index) =>(
              <div key={index} style={{backgroundImage: `url(${project.bgImage})`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-6'>
                  <div>
                    <h2 className=''>{project.title}</h2>
                    <p className=''>{project.description}</p>
                  </div>
                  <div>
                    <a href='' className='' onClick={handleExploreButton}>Let's Connect <GrLinkedin className='rounded-full w-10' size={20}/></a>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <a href='' className='py-2.5 px-6 w-max flex items-center justify-between bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500' onClick={handleExploreButton}>Let's Connect <GrLinkedin className='rounded-full w-10' size={20}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects