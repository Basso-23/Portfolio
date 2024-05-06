import Footer from "@/components/sections/Footer";
import Experience from "../components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";

const App = () => {
  return (
    <main>
      <div className="pageSize min-h-screen">
        {/*//* Title */}
        <div className=" border-b pb-7 mt-8 tracking-tighter text-[25px] font-semibold sm:flex hidden">
          Welcome to my portfolio
        </div>
        <div className="sm:hidden flex justify-between mt-4 tracking-tighter text-[25px] font-semibold items-center border-b pb-5">
          <div>Portfolio</div>
          <Navbar />
        </div>

        <Skills />
        <Projects />
        <Experience />
      </div>

      {/*//* Seprador del footer */}
      <div className="bg-[#eeeeee] h-[0.8px] w-full sm:mt-32 mt-20"></div>
      <Footer />
    </main>
  );
};

export default App;
