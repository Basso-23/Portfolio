import Footer from "@/components/sections/Footer";
import Experience from "../components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <main>
      <div className="pageSize sm:pt-10 pt-4 min-h-screen ">
        {/*//* Title */}
        <div className="text-[30px] font-medium mt-10 leading-tight">
          Hola soy Carlos Baso un Ing. de Software. <br />
          Bienvenido a mi portafolio
        </div>

        <Skills />
        <Experience />
        <Projects />
      </div>
      <div className="bg-[#eeeeee] h-[0.9px] w-full sm:mt-32 mt-20"></div>

      <Footer />
    </main>
  );
};

export default App;
