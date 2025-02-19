import React, {useEffect, useState} from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const Contact = () => {
  const [username, setUsername] = useState("");
  const handleFormSubmit = (FormData) =>{
    const data = Object.fromEntries(FormData.entries()); 
    console.log(data);
    setUsername(data.username);
  }
  useEffect(()=>{
    if(username){
      setTimeout(() => {
        setUsername("");
      }, 3000);
    }
  }, [username])
  
  return (
    <div id="contact" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-Ovo'>Contact Me</h2>
        <p className='text-center max-w-2xl mx-auto mt-16 mb-12'>
            Whether you have a questions, want to collaborate on a project or just want to give a feedback then my inbox is always open. I'd love to hear from you ^-^
        </p>

        <form className='max-w-2xl mx-auto' action={handleFormSubmit}>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <input type='text' name="username" placeholder='Your Full Name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-md' required/>
                <input type='email' name="email_Id" placeholder='Your Email ID' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white shadow-md' required/>
            </div>
            <textarea rows='6' name='feedback' placeholder='Leave your Feedback here...' autoComplete='false' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 shadow-md' required></textarea>
            {username ? <h3 className='py-2 px-6 w-max flex items-center justify-between gap-2 text-black/80 rounded-full mx-auto duration-500'>Thanks<b>{username}</b>for your feedback...</h3> : <button type='submit' className='py-2 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Send <IoIosArrowDropright size={20}/> </button> }
        </form>
        
    </div>
  )
}

export default Contact