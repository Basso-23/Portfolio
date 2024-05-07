import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import TextTransition, { presets } from "react-text-transition";

const Header_Mobile = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [index, setIndex] = useState(0);

  const TEXTS = ["React", "Next", "Astro", "Git", "Node", "JS", "html", "ccs"];

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 //* every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="sm:hidden flex justify-between py-3 tracking-tighter text-[26px] font-semibold items-center border-b">
      <div className="flex">
        {language ? <>Portafolio</> : <>Portfolio</>}
        <div className="font-bold tracking-tighter text-[11px] uppercase top-0 bg-black text-white rounded-md px-[8px] py-[2px] h-fit ml-2 min-h-[20px]">
          <TextTransition springConfig={presets.stiff}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>{" "}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header_Mobile;
