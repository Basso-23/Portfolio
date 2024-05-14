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
          className="aspect-video w-full bg-no-repeat bg-cover rounded-sm relative bg-top border "
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
    <div className="mt-4 py-4 pb-4">
      <div className="tracking-tighter text-[25px] font-semibold leading-tighter relative w-fit">
        {language ? <>Todos los proyectos</> : <>All projects</>}
      </div>
      <Filters />

      <div className="grid-container mt-8 ">
        {data
          .map((item, index) => (
            <m.div key={index}>
              <Tilt
                scale={1.04}
                transitionSpeed={2500}
                tiltMaxAngleX={1.1}
                tiltMaxAngleY={1.1}
              >
                <ImageRender
                  img={item.image}
                  url={item.name.replace(/ /g, "-")}
                />
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
            </m.div>
          ))
          .reverse()}
      </div>
    </div>
  );
};

export default Projects;
