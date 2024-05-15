import React, { useState, useEffect } from "react";
import Filters from "../elements/Filters";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";
import { imageAtom } from "@/atom";
import Link from "next/link";

const Projects = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

  useEffect(() => {
    setData(originalData);
  }, [originalData, setData]);

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
      <div className="border-[#333333] border-b relative">
        {imageLoaded && (
          <div className=" absolute fixedCenterXnY">
            <div className=" loader"></div>
          </div>
        )}

        <div
          style={{
            backgroundImage: `url(${img})`,
            visibility: imageLoaded ? "hidden" : "visible",
          }}
          className="aspect-video w-full bg-no-repeat bg-cover relative bg-top"
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
      <section className="w-[250px] min-h-[700px] bg-[#1d1d1d] border-r border-[#333333] sm:block hidden pb-6">
        <div className=" flex flex-col sticky top-14">
          <div className="p-5 font-medium border-b border-[#333333] flex">
            {language ? <>Filtros</> : <>Filters</>}
          </div>
          <Filters />
        </div>
      </section>
      <section className="pageSize flex-1">
        <h1 className="sm:flex hidden sm:text-[5vw] text-[24px] font-semibold uppercase lg:pl-0 sm:pl-8 lg:mb-4 sm:-mb-4 mb-4 lg:mt-0 mt-6 text-[#5f5f5f] tracking-tighter">
          {language ? <>Proyectos recientes</> : <>Recent projects</>}
        </h1>
        <h1 className="text-[24px] sm:hidden flex font-medium mb-5 mt-3">
          {language ? <>Proyectos recientes</> : <>Recent projects</>}
        </h1>
        <div className="grid-container grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 lg:p-0 sm:p-8">
          {data
            .map((item, index) => (
              <div key={index}>
                <div className="grid-content border border-[#333333] rounded-sm overflow-hidden bg-[#1d1d1d] ">
                  <ImageRender
                    img={item.image}
                    url={item.name.replace(/ /g, "-")}
                  />
                  <div className=" p-4">
                    <div className="text-[14px]">{item.name}</div>
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
