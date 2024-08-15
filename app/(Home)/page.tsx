import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Terminal from "./components/Terminal";

const page = () => {
  return (
    <div className=" min-h-screen bg-black overflow-hidden">
      <div className=" dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative">
        <div className=" max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
        </div>
        <div className=" h-30  bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:-bottom-4 w-full"></div>
      </div>
      <div className=" max-w-7xl mx-auto p-5 mt-20 space-y-5">
        <div className=" max-sm:hidden border-t"></div>
        <div className=" max-sm:hidden w-full flex justify-center items-center gap-x-3 font-normal">
          <Terminal />
          <div className="w-[40%] h-[500px]  flex flex-col items-start justify-start p-4">
            <h1 className=" text-5xl font-semibold">Check this out!</h1>
            <p className=" text-2xl text-neutral-400">A terminal like interactive interface with some predefined commands like - <br /> about, projects, skills, cls, help, etc.
            </p>
          </div>
        </div>
        <div className=" border-t"></div>
        <Skills />
        <div className=" border-t"></div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default page;
