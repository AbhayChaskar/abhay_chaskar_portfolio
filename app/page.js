'use client'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Contact/>
    </>
  );
}
