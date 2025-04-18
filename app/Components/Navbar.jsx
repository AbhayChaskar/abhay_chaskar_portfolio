import React, { useState, useEffect, useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";
import { motion } from 'motion/react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [isPdfDownload, setPdfDownload] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    setPdfUrl("/abhay_chaskar_resume.pdf");
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Abhay_Chaskar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setPdfDownload(true);
    setTimeout(() => {
      setPdfDownload(false);
    }, 2000);
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-1 flex items-center justify-between z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-md shadow-sm dark:bg-darkTheme dark:shadow-white/90 dark:bg-opacity-70" : ""}`}>
        <motion.a initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: 'spring', stiffness: 100}} href="https://www.youtube.com/@Melvis47" target="_blank">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-20 cursor-pointer mr-14"
          />
        </motion.a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-2.5 rounded-full
            ${ isScroll ? "" : "border border-gray bg-white shadow-md bg-opacity-50 dark:border-darkHover dark:border-white/50 dark:bg-transparent dark:shadow-lightHover/20"}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            {
                isDarkMode ? <BsSunFill size={22} className="text-white/80" /> : <IoMoonSharp size={20} className="text-black/80" />
            }
          </button>
          {isPdfDownload ? (
            <div className="hidden lg:flex items-center gap-2 px-3.5 py-2 border border-gray-400 text-black/80 rounded-full ml-4 dark:border-white dark:text-white">
              Downloading...
            </div>
          ) : (
            <motion.a initial={{y:30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration: 0.6, delay: 1.2}}
              href="#resume"
              className="hidden lg:flex items-center gap-3 px-6 py-2 rounded-full ml-4 bg-black/80 text-white hover:bg-black duration-500 dark:border-none dark:bg-white/80 dark:hover:bg-white dark:duration-500 dark:text-black"
              onClick={handleResumeDownload}
            >
              Resume <FiDownload size={21} />
            </motion.a>
          )}
          <button className="block md:hidden ml-3">
            <CgMenuRightAlt size={27} onClick={openMenu} />
          </button>
        </div>

        {/* Side menu for small devices */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-gray-50 transition duration-500 dark:text-white dark:bg-darkHover"
        >
          <div className="absolute right-5 top-7">
            <IoClose size={30} className="cursor-pointer" onClick={closeMenu} />
          </div>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            {" "}
            {isPdfDownload ? (
              <div className="text-black/80">Downloading...</div>
            ) : (
              <a
                href="#resume"
                onClick={handleResumeDownload}
                className="flex gap-2 items-center"
              >
                Resume <FiDownload size={21} />
              </a>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
