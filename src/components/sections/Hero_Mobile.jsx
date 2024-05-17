import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero_Mobile = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <section className="flex flex-col lg:hidden h-full w-full">
      {/*//* Video */}
      <div className="relative w-full h-full">
        <video muted loop autoPlay>
          <source src="/landing6.mp4" type="video/mp4" />
        </video>
        <div className=" absolute bottom-5 right-5 text-end text-sm">
          <div>The Codegrid</div>
          <div className="text-[#bababa]">Design Originals</div>
        </div>
      </div>

      <div className=" bg-[#151415] leading-none flex flex-col gap-2 px-4 pt-8 pb-10 h-fit">
        <div className=" font-medium text-[28px] text-[#ffffff] relative">
          {language ? <>Portafolio.</> : <>Portfolio.</>}
        </div>
        <div className="text-[#a1a1a1] leading-7">
          {language ? (
            <>
              Mi nombre es Carlos Baso, un Ing. de Software especializado
              desarrollo de web. Aquí encontrarás una selección de mis proyectos
              más destacados.
            </>
          ) : (
            <>
              My name is Carlos Baso, a Software Engineer specialized in web
              development. Here you will find a selection of my most notable
              projects.
            </>
          )}
        </div>
        <div className="  grid grid-cols-2 gap-6 mt-4 font-medium text-[15px] text-center">
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className=" bg-white text-black py-4 cursor-pointer hover:bg-[#d7d7d7] transition-all"
          >
            {language ? <>Ver proyectos</> : <>See projects</>}
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={1000}
            className=" border border-[#292929] py-4  cursor-pointer hover:bg-[#292929] transition-all"
          >
            {language ? <> Ir a Experiencia</> : <> Go to Experience </>}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero_Mobile;
