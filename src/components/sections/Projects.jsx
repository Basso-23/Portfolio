import React, { useState, useEffect } from "react";
import Filters from "../elements/Filters";
import { useAtom } from "jotai";
import { originalAtom } from "@/atom";
import { dataAtom } from "@/atom";
import { languageAtom } from "@/atom";
import { imageAtom } from "@/atom";
import Loader from "../elements/Loader";

const Projects = () => {
  const [originalData, setOriginalData] = useAtom(originalAtom);
  const [data, setData] = useAtom(dataAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [imageLoaded, setImageLoaded] = useAtom(imageAtom);

  useEffect(() => {
    setData(originalData);
  }, [originalData, setData]);

  const ImageRender = ({ img }) => {
    useEffect(() => {
      if (imageLoaded) {
        const imagen = new Image();
        imagen.src = img;
        imagen.onload = () => {
          setTimeout(() => {
            setImageLoaded(false);
          }, 1300);
        };
      }
    }, [img]);

    return (
      <div className="border-[#333333] border-b relative imagen">
        <Loader />
        <div
          style={{
            backgroundImage: `url(${img})`,
            visibility: imageLoaded ? "hidden" : "visible",
          }}
          className="aspect-video h-full w-full bg-no-repeat bg-cover relative bg-top"
        ></div>
      </div>
    );
  };

  return (
    <section name="projects" className="flex min-h-screen">
      <div className="pageSize flex-1 w-full mt-10">
        <h1 className="text-[24px]  font-medium">
          {language ? <>Proyectos recientes</> : <>Recent projects</>}
        </h1>
        <Filters />
        <div className="grid-container grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
          {data
            .map((item, index) => (
              <div key={index} className=" cursor-pointer container-individual">
                <div className="grid-content border border-[#333333] rounded- overflow-hidden bg-[#161616] ">
                  <ImageRender img={item.image} />
                  <div className=" p-4 grid-info">
                    <div className="text-[14px]">{item.name}</div>
                    <div className="text-[#808080] uppercase font-bold leading-none text-[13px] mt-2">
                      {item.category}
                    </div>
                    <section className=" hidden relative h-full p-5 leading-none">
                      <h1 className="text-[20px]"> {item.name}</h1>
                      <h2 className="text-[15px] mt-4 text-[#b7b7b7] leading-6">
                        {item.summary}
                      </h2>
                      <p className="text-[#808080] font-semibold text-[14px] w-fit mt-4">
                        {language ? <>Leer más</> : <>Read More</>}
                      </p>
                      <p className=" absolute bottom-5 left-5 text-[#808080] uppercase font-bold text-[13px]">
                        {item.category}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </section>
  );
};

export default Projects;
