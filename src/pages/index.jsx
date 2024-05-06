import Footer from "@/components/sections/Footer";
import Experience from "../components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import Header from "@/components/sections/Header";
import ScrollToTop from "@/components/elements/ScrollToTop";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";

const App = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  return (
    <main>
      <div className="pageSize min-h-screen">
        <Header />
        <div className="sm:hidden flex justify-between py-3 tracking-tighter text-[26px] font-semibold items-center border-b">
          <div>{language ? <>Portafolio</> : <>Portfolio</>}</div>
          <Navbar />
        </div>
        <Skills />
        <Projects />
        <Experience />
      </div>

      {/*//* Seprador del footer */}
      <div className="bg-[#eeeeee] h-[0.8px] w-full sm:mt-32 mt-20"></div>
      <Footer />

      <ScrollToTop />
    </main>
  );
};

export default App;
