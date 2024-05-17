import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { languageAtom } from "@/atom";
import Arrow from "@/icons/Arrow";

const Logo = ({ img, url, width }) => {
  return (
    <a
      target="_blank"
      href={url}
      className="bg-[#101010] h-[125px] w-full relative cursor-pointer logo-container"
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={`${width} h-full saturate-0 cardImage`}
      ></div>
      <div className=" absolute fixedCenterY right-0 w-8 h-9 border border-r-0 rounded-tl-full rounded-bl-full border-[#363636] flex justify-center items-center url-arrow">
        <div className="mr-[-6px] mt-[-0.5px] rotate-90 text-[13px]">
          <Arrow />
        </div>
      </div>
    </a>
  );
};

const Experience = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  return (
    <main name="experience" className="flex ">
      <section className="pageSize flex-1 w-full mt-10">
        <h1 className="text-[24px]  font-medium">
          {language ? <>Experiencia</> : <>Experience</>}
        </h1>
        <h1 className="text-[15px] mt-3 text-[#cccccc]">
          {language ? (
            <>
              Algunas compañías y asociaciones con las que he podido colaborar a
              lo largo de mi carrera.
            </>
          ) : (
            <>
              Some companies and associations with which I have been able to
              collaborate throughout my career.
            </>
          )}
        </h1>

        <div className="mt-6 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[0.8px] border border-[#292929] bg-[#292929] relative">
          <div className="xl:block hidden  h-[125px] bg-[#010001] relative"></div>
          <div className="xl:block hidden  h-[125px] bg-[#010001]"></div>
          <div className="xl:block hidden  h-[125px] bg-[#010001]"></div>
          <Logo
            alt="Hong Kong Smart"
            img={"https://i.imgur.com/JIzxJBA.png"}
            width={"w-[190px]"}
            url={"https://hkspos.com"}
          />
          <Logo
            alt="Muñoz y Asociados"
            img={"https://i.imgur.com/DrxdPTG.png"}
            width={"w-[190px]"}
            url={"https://www.munozyasociados.net/"}
          />
          <Logo
            alt="Realizando Metas"
            img={"https://i.imgur.com/6tjGPnb.png"}
            width={"w-[70px]"}
            url={"https://somosrmpa.com/"}
          />
          <Logo
            alt="Partido Alianza"
            img={"https://i.imgur.com/s9LgztZ.png"}
            width={"w-[80px]"}
            url={"https://partidoalianza.com/"}
          />
          <Logo
            alt="PAYÁ"
            img={"https://i.imgur.com/0x4hiJH.png"}
            width={"w-[80px]"}
            url={"https://pidepaya.com"}
          />
          <div className="md:block hidden h-[125px] bg-[#010001] relative"></div>

          <div className="xl:grid hidden absolute w-6 aspect-square top-[113.5px] -left-3 grid-cols-2">
            <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-r border-[#9a9a9a]"></div>
            <div className=" w-full"></div>
          </div>
          <div className="xl:grid hidden absolute w-6 aspect-square -bottom-3 -left-3 grid-cols-2">
            <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-r border-[#9a9a9a]"></div>
            <div className=" w-full"></div>
          </div>
          <div className="xl:grid hidden absolute w-6 aspect-square bottom-[113.5px] -right-3 grid-cols-2">
            <div className=" w-full border-r border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-b border-[#9a9a9a]"></div>
            <div className=" w-full border-r border-[#9a9a9a]"></div>
            <div className=" w-full"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
