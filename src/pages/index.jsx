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
          <div className=" relative">
            {language ? <>Portafolio</> : <>Portfolio</>}
            <div
              className={`font-bold tracking-tighter text-[11px] absolute uppercase top-0 bg-black text-white rounded-md px-[8px] py-[2px] ${
                language ? "right-[-60px]" : "right-[-48px]"
              }`}
            >
              {language ? <>nuevo</> : <>new</>}
            </div>
          </div>
          <Navbar />
        </div>
        <Skills />
        <Projects />
        <Experience />
      </div>

      <div className="bg-[#f7f7f7] border-t mt-20">
        <div className="pageSize">
          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </main>
  );
};

export default App;
