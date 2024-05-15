import React, { useState, useEffect } from "react";
import Filters from "../elements/Filters";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";
import { imageAtom } from "@/atom";
import { motion as m } from "framer-motion";
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
import Loader from "../elements/Loader";
import Html from "@/icons/skills/Html";
import Css from "@/icons/skills/Css";

const Projects = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

  useEffect(() => {
    setData(originalData);
  }, [originalData, setData]);

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

  const ImageRender = ({ img, url }) => {
    useEffect(() => {
      if (imageLoaded) {
        const imagen = new Image();
        imagen.src = img;
        imagen.onload = () => {
          setTimeout(() => {
            setImageLoaded(false);
          }, 1000);
        };
      }
    }, [img]);

    return (
      <div>
        {imageLoaded && <p>Cargando...</p>}

        <div
          style={{
            backgroundImage: `url(${img})`,
            visibility: imageLoaded ? "hidden" : "visible",
          }}
          className="aspect-video w-full bg-no-repeat bg-cover rounded-tr-sm rounded-tl-sm relative bg-top"
        >
          <Link
            href={{
              pathname: "/projects/[id]",
              query: { id: url },
            }}
            className=" absolute w-full h-full cursor-pointer"
          ></Link>
        </div>
      </div>
    );
  };

  return (
    <div name="projects" className="flex border-[#2f2f2f] border-b">
      <section className="w-[250px] min-h-[700px] bg-[#1d1d1d] border-r border-[#333333] sm:block hidden">
        <div className=" flex flex-col sticky top-0">
          <div className="p-5 font-medium border-b border-[#333333] flex">
            {language ? <>Filtros</> : <>Filters</>}
          </div>
          <Filters />
        </div>
      </section>
      <section className="pageSize flex-1">
        <div className="grid-container grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 lg:p-0 sm:p-8">
          {data
            .map((item, index) => (
              <div key={index}>
                <div className="grid-content border border-[#333333] rounded-sm bg-[#1d1d1d]">
                  <ImageRender
                    img={item.image}
                    url={item.name.replace(/ /g, "-")}
                  />
                  <div className=" p-4">
                    <div className="text-[14px] ">{item.name}</div>
                    <div className="text-[#808080] uppercase font-bold leading-none text-[13px] mt-2">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </section>
    </div>
  );
};

export default Projects;
