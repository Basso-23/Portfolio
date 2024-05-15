import React, { useState, useEffect } from "react";
import Badge from "@/components/elements/Badge";
import JS from "@/icons/skills/JS";
import React_logo from "@/icons/skills/React";
import Next from "@/icons/skills/Next";
import Tailwind from "@/icons/skills/Tailwind";
import Astro from "@/icons/skills/Astro";
import Firebase from "@/icons/skills/Firebase";
import Git from "@/icons/skills/Git";
import NodeJS from "@/icons/skills/NodeJS";
import Html from "@/icons/skills/Html";
import Css from "@/icons/skills/Css";
import Linux from "@/icons/skills/Linux";
import Shadcn from "@/icons/skills/Shadcn";

import { useAtom } from "jotai";
import { languageAtom } from "@/atom";

const Skills = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  return (
    <main className="flex ">
      <section className="pageSize flex-1 w-full mt-10">
        <h1 className="text-[24px]  font-medium">
          {language ? <>Experiencia</> : <>Experience</>}
        </h1>
        <div className="py-3 px-4 mt-6 text-[14px] border border-[#1E1F1E] bg-[#161616]">
          dad
        </div>
        <div className="mt-6 grid xl:grid-cols-3 grid-cols-2 gap-[0.8px] border border-[#1E1F1E] bg-[#1E1F1E] ">
          <div className="xl:block hidden  h-[125px] bg-[#010001] relative">
            <div className=" absolute w-6 aspect-square -bottom-3 -left-3 grid-cols-2 grid">
              <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-r border-[#9a9a9a]"></div>
              <div className=" w-full"></div>
            </div>
          </div>
          <div className="xl:block hidden  h-[125px] bg-[#010001]"></div>
          <div className="xl:block hidden  h-[125px] bg-[#010001]"></div>
          <div className="bg-[#010001] h-[125px] w-full">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/Dxcvtil.png")`,
              }}
              className="w-[200px] h-full saturate-0 cardImage"
            ></div>
          </div>
          <div className="bg-[#010001] h-[125px] w-full">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/MAZ0Sya.png")`,
              }}
              className="w-[200px] h-full saturate-0 cardImage"
            ></div>
          </div>
          <div className="bg-[#010001] h-[125px] w-full">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/IXPI0qS.png")`,
              }}
              className="w-[75px] h-full saturate-0 cardImage"
            ></div>
          </div>
          <div className="xl:block hidden h-[125px] bg-[#010001] relative">
            <div
              style={{
                backgroundImage: `url("https://i.imgur.com/G4N2p9E.png")`,
              }}
              className="w-[75px] h-full saturate-0 cardImage"
            ></div>
            <div className=" absolute w-6 aspect-square -bottom-3 -left-3 grid-cols-2 grid">
              <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-r border-[#9a9a9a]"></div>
              <div className=" w-full"></div>
            </div>
          </div>
          <div className="xl:block hidden h-[125px] bg-[#010001]"></div>
          <div className="xl:block hidden h-[125px] bg-[#010001] relative">
            <div className=" absolute w-6 aspect-square -top-3 -right-3 grid-cols-2 grid">
              <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-b border-[#9a9a9a]"></div>
              <div className=" w-full border-r border-[#9a9a9a]"></div>
              <div className=" w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
