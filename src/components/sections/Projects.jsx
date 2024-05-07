import React, { useState, useEffect } from "react";
import { projects_EN } from "@/json/projects_EN";
import { projects_ES } from "@/json/projects_ES";
import Filters from "../elements/Filters";

import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";

import { motion as m } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import Visit from "@/icons/Visit";

import { useRouter } from "next/router";

const Projects = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  useEffect(() => {
    setData(originalData);
  }, [originalData]);

  useEffect(() => {
    if (language) {
      setOriginalData(projects_ES);
    } else {
      setOriginalData(projects_EN);
    }
  }, [language]);

  const router = useRouter();
  const id = router.query.id;

  return (
    <div className="mt-4 py-4 pb-4">
      <div className="animate-fade-up delay-150">
        <div className="tracking-tighter text-[25px] font-semibold leading-tighter relative w-fit">
          {language ? <>Todos los proyectos</> : <>All projects</>}
        </div>
        <Filters />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 mt-8 animate-fade-up delay-300">
        {data
          .map((item, index) => (
            <m.div layout key={index}>
              <Tilt
                scale={1.04}
                transitionSpeed={2500}
                tiltMaxAngleX={1.1}
                tiltMaxAngleY={1.1}
                className=" cursor-pointer"
              >
                <div
                  style={{
                    backgroundImage: `url("${item.image}")`,
                  }}
                  className=" aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border"
                >
                  <Link
                    href={{
                      pathname: "/projects/[id]",
                      query: { id: item.name.replace(/ /g, "-") },
                    }}
                    className=" absolute w-full h-full"
                  ></Link>
                </div>
              </Tilt>
              <div className=" flex justify-between items-center mt-4">
                <div>
                  <div className="font-bold tracking-tighter text-[14px]">
                    {item.name}
                  </div>
                  <div className="text-[#5b5b5b] flex gap-2 leading-none font-medium tracking-tighter text-[13px] mt-[2px] relative">
                    <div className="border-r pr-2 capitalize">
                      {item.category}
                    </div>
                    <div>{item.date}</div>
                  </div>
                </div>

                <Link
                  href={{
                    pathname: "/projects/[id]",
                    query: { id: item.name.replace(/ /g, "-") },
                  }}
                >
                  <div className=" flex gap-2 items-center bg-black text-white px-2 py-1 rounded-sm hover:bg-[#1e1e1e] transition-all">
                    <Visit />
                    <div className="text-[13px]">
                      {language ? <>Ver detalles</> : <>View details</>}
                    </div>
                  </div>
                </Link>
              </div>
            </m.div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Projects;
