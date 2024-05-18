import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  const [language, setLanguage] = useAtom(languageAtom);

  return (
    <section className=" pageSize bg-no-repeat bg-top bg-contain pt-24 pb-20 flex flex-col items-center justify-center leading-none text-center radial">
      <div className=" font-bold lg:text-[64px] sm:text-[46px] text-[28px]">
        {language ? <> Descubre nuevas ideas. </> : <>Discover new ideas</>}
      </div>
      <div className=" font-bold lg:text-[64px] sm:text-[46px] text-[28px] mt-1">
        {language ? <> Explora mi trabajo.</> : <>Explore my work.</>}
      </div>
      <div className=" font-normal lg:text-[21px] text-[18px] max-w-[800px] text-[#888] sm:leading-8 leading-6 mt-8 text-balance">
        {language ? (
          <>
            Mi nombre es Carlos Baso, un Ing. de Software especializado en
            desarrollo de web. Aquí encontrarás mis proyectos más destacados.
          </>
        ) : (
          <>
            My name is Carlos Baso, a Software Engineer specialized in web
            development. Here you will find my most notable projects.
          </>
        )}
      </div>
      <div className=" grid grid-cols-2 sm:w-fit w-full justify-center gap-6 mt-12">
        <Link
          to="projects"
          smooth={true}
          duration={1000}
          offset={25}
          className="py-[16px] sm:w-[200px] w-full bg-white hover:bg-[#d7d7d7] transition-all font-medium text-[15px] cursor-pointer text-black rounded-smm"
        >
          {language ? <> Ver proyectos </> : <> See projects </>}
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={1000}
          offset={25}
          className="py-[16px] sm:w-[200px] w-full border border-[#333333] hover:bg-[#333333] transition-all font-medium text-[15px] cursor-pointer rounded-smm"
        >
          {language ? <> Ir a Experiencia </> : <>Go to Experience </>}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
