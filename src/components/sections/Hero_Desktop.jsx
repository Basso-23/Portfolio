import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";

const Hero_Desktop = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <section className="lg:flex hidden h-full w-full">
      {/*//* LEFT */}
      <div className=" h-full w-[550px] border-r border-[#2f2f2f] flex justify-center items-center relative">
        <div className="pl-6 leading-none flex flex-col gap-2 -mt-24">
          <div className=" font-medium text-[min(5vw,55px)] text-[#ffffff] relative">
            {language ? <>Portafolio.</> : <>Portfolio.</>}
          </div>
          <div className="text-[#a1a1a1] max-w-[430px] leading-7 mt-3">
            {language ? (
              <>
                Mi nombre es Carlos Baso, un Ing. de Software especializado
                desarrollo de web. Aquí encontrarás una selección de mis
                proyectos más destacados.
              </>
            ) : (
              <>
                My name is Carlos Baso, a Software Engineer specialized in web
                development. Here you will find a selection of my most notable
                projects.
              </>
            )}
          </div>
          <div className=" flex gap-6 mt-10 font-medium text-[15px]">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className=" bg-white text-black py-4 px-8 cursor-pointer hover:bg-[#d7d7d7] transition-all"
            >
              {language ? <>Ver proyectos</> : <>See projects</>}
            </Link>
            <Link
              to="experience"
              smooth={true}
              duration={1000}
              className=" border border-[#292929] py-4 px-8 cursor-pointer hover:bg-[#292929] transition-all"
            >
              {language ? <> Ir a Experiencia</> : <> Go to Experience </>}
            </Link>
          </div>
        </div>
      </div>

      {/*//* Video */}
      <div className="relative flex flex-1">
        <video muted loop autoPlay>
          <source src="/landing6.mp4" type="video/mp4" />
        </video>
        <div className=" absolute bottom-10 right-11 text-end text-sm">
          <div>The Codegrid</div>
          <div className="text-[#bababa]">Design Originals</div>
        </div>
        <div className=" absolute w-full h-full z-50 noise top-0"></div>
      </div>
    </section>
  );
};

export default Hero_Desktop;
