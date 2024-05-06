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
        <div className="text-[30px] font-semibold mt-12 leading-tighter border-b pb-6">
          Welcome back
        </div>
        <Skills />
        <Projects />
        <Experience />
      </div>

      <div className=" m-20 font-bold tracking-tighter">Share waste stream</div>
      {/*//* Seprador del footer */}
      <div className="bg-[#eeeeee] h-[0.8px] w-full sm:mt-32 mt-20"></div>
      <Footer />
    </main>
  );
};

export default App;
