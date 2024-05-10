import React, { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { languageAtom } from "@/atom";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import JS from "@/icons/skills/JS";
import React_logo from "@/icons/skills/React";
import Next from "@/icons/skills/Next";
import Tailwind from "@/icons/skills/Tailwind";
import Astro from "@/icons/skills/Astro";
import Firebase from "@/icons/skills/Firebase";
import NodeJS from "@/icons/skills/NodeJS";
import Shadcn from "@/icons/skills/Shadcn";
import Html from "@/icons/skills/Html";
import Css from "@/icons/skills/Css";
import arrayShuffle from "array-shuffle";
import { useRouter } from "next/router";

const Related = () => {
  const router = useRouter();
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const id = router.query.id;
  //console.log(id, "ID");

  const skills = {
    Next: <Next />,
    Javascript: <JS />,
    React: <React_logo />,
    Tailwind: <Tailwind />,
    Astro: <Astro />,
    Firebase: <Firebase />,
    Node: <NodeJS />,
    Shadcn: <Shadcn />,
    HTML: <Html />,
    CSS: <Css />,
  };

  const TechToRender = ({ name }) => {
    const Tech = skills[name];
    return Tech ? Tech : null;
  };

  const divRef = useRef(null);

  const handleScrollToStart = () => {
    divRef.current.scrollLeft = 0;
  };

  return (
    <main className="sticky sm:py-10 py-8 border-t border-b">
      <div className=" pageSize font-bold text-[24px] mb-1 tracking-tighter">
        {language ? <>Proyectos Relacionados</> : <>Related Projects</>}
      </div>
      <div
        ref={divRef}
        className="  pageSize flex gap-8 overflow-x-auto pt-3 pb-4"
      >
        {arrayShuffle(originalData)
          .filter((item) => item.name.replace(/ /g, "-") != id)
          .map((item, index) => (
            <div layout key={index}>
              <Tilt
                scale={1.04}
                transitionSpeed={2500}
                tiltMaxAngleX={1.1}
                tiltMaxAngleY={1.1}
              >
                <div
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                  className=" aspect-video min-w-[325px] bg-no-repeat bg-cover rounded-sm relative bg-top border over"
                >
                  <Link
                    href={{
                      pathname: "/projects/[id]",
                      query: { id: item.name.replace(/ /g, "-") },
                    }}
                    onClick={() => {
                      handleScrollToStart();
                    }}
                    className=" absolute w-full h-full cursor-pointer"
                  ></Link>
                </div>
              </Tilt>
              <div className=" flex justify-between items-center mt-3">
                <div>
                  <div className="font-bold tracking-tighter text-[14px] ">
                    {item.name}
                  </div>
                  <div className="text-[#5b5b5b] flex gap-2 leading-none font-medium tracking-tighter text-[13px] mt-[2px] relative">
                    <div className="border-r pr-2 capitalize">
                      {item.category}
                    </div>
                    <div>{item.date}</div>
                  </div>
                </div>

                <div className="flex relative text-[11px] leading-none text-[#7e7e7e] -mt-8 select-none">
                  <div className="flex justify-center items-center w-7 rounded-full aspect-square bg-[#eeeeee] border-[2px] border-white z-30 absolute right-0 tracking-tight">
                    +{item.tech.length - 2}
                  </div>
                  <div className="text-[15px] flex justify-center items-center w-7 rounded-full aspect-square bg-[#eeeeee] border-[2px] border-white z-20 absolute right-[20px] tracking-tight">
                    <TechToRender name={item.tech1} />
                  </div>
                  <div className="text-[15px] flex justify-center items-center w-7 rounded-full aspect-square bg-[#eeeeee] border-[2px] border-white z-10 absolute right-[40px] tracking-tight">
                    <TechToRender name={item.tech2} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Related;
